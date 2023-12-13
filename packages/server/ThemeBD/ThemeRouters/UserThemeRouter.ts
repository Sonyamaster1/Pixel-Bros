import { Router } from 'express'
import UserThemeAPI from '../Controllers/UserThemeAPI'
import bodyParser from 'body-parser'
const UserThemeRouter = Router()

UserThemeRouter.use(bodyParser.json({ type: 'application/json' }))
UserThemeRouter.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

UserThemeRouter.get('/:id', async (req, rej) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return rej
        .status(500)
        .send({ status: 'error', detail: 'Значение id должно быть числом' })
    }

    const userTheme = await UserThemeAPI.getUserTheme(id)
    if (!userTheme) {
      return rej.status(500).send({
        status: 'error',
        detail: 'Пользователь с таким id не найден',
      })
    }

    return rej.status(200).send(userTheme)
  } catch (error) {
    return rej.status(500).send(error)
  }
})

UserThemeRouter.post('/add', async (req, rej) => {
  try {
    const id = parseInt(req.body.id)

    if (id) {
      await UserThemeAPI.createUserTheme(id)
      return rej.status(200).send({ status: 'ok' })
    } else {
      return rej
        .status(500)
        .send({ status: 'error', detail: 'Значение id должно быть числом' })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rej
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

UserThemeRouter.post('/update', async (req, rej) => {
  try {
    const body = req.body
    await UserThemeAPI.setUserTheme(body.id, body.theme)
    return rej.status(200).send({ status: 'ok' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rej
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

export default UserThemeRouter
