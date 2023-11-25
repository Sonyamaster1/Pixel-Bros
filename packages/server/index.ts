import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config({ path: '../../.env.sample' })

import express from 'express'
import { createClientAndConnect } from './db'
import * as process from 'process'
import * as fs from 'fs/promises'
import * as path from 'path'
import type { ViteDevServer } from 'vite'
import { initialStore } from './constants'

async function startServer() {
  const isDev = () => process.env.NODE_ENV === 'development'
  const isProduction = () => !isDev()
  let vite: ViteDevServer | undefined
  const clientPath = isProduction()
    ? // насколько я понимаю в production режиме файл находится в server/dist
      // соответственно нужно выйти на 2 уровня
      path.join(__dirname, '../../client')
    : path.join(__dirname, '../client')
  const distPath = path.join(clientPath, 'dist')

  const ssrManifest = isProduction()
    ? await fs.readFile(path.join(distPath, 'ssr-manifest.json'), 'utf-8')
    : undefined

  const app = express()
  app.use(cors())
  const port = Number(process.env.SERVER_PORT) || 3001

  await createClientAndConnect()

  if (isDev()) {
    const { createServer: createServerVite } = await import('vite')

    vite = await createServerVite({
      root: clientPath,
      base: '/',
      server: {
        middlewareMode: true,
      },
      appType: 'custom',
    })

    app.use(vite.middlewares)
  }

  app.use(express.static(path.join(distPath), { index: false }))

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :)')
  })

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl
      let template: string
      let render: (
        url: string,
        store: unknown,
        ssrManifest?: string
      ) => Promise<string>

      if (isProduction()) {
        template = await fs.readFile(path.join(distPath, 'index.html'), 'utf-8')

        render = (await import(path.join(distPath, 'ssr/entry-server.cjs')))
          .render
      } else {
        template = await fs.readFile(
          path.join(clientPath, './index.html'),
          'utf-8'
        )
        template = await vite!.transformIndexHtml(url, template)
        render = (
          await vite!.ssrLoadModule(
            path.join(clientPath, '/src/entry-server.tsx')
          )
        ).render
      }

      const rendered = await render(url, ssrManifest)

      const ssrData = `<script>window.__PRELOADED_STATE__=${JSON.stringify(
        initialStore
      )}</script>`
      const html = template
        .replace('<!--ssr-outlet-->', rendered)
        .replace('<!--ssr-data-->', ssrData)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: unknown) {
      if (e instanceof Error) {
        if (isDev()) {
          vite?.ssrFixStacktrace(e)
        }
        res.status(500).end(e.stack)
      }
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

startServer()
