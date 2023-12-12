import { Router } from 'express'
import SiteThemeAPI from '../Controllers/SiteThemeAPI'
import bodyParser from 'body-parser'
const SiteThemeRouter = Router()

SiteThemeRouter.use(bodyParser.json({ type: 'application/json' }))
SiteThemeRouter.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

SiteThemeRouter.post('/create', async (req, res) => {
  try {
    const theme = req.body.theme
    SiteThemeAPI.setSiteTheme(theme)
    return res.status(200).send({ status: 'ok' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

export default SiteThemeRouter
