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

UserThemeRouter.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (!isNaN(id)) {
      const userTheme = await UserThemeAPI.getUserTheme(id)
      if (typeof userTheme !== 'undefined') {
        return res.status(200).send(userTheme)
      } else {
        return res.status(500).send({
          status: 'error',
          detail: 'Пользователь с таким id не найден',
        })
      }
    } else {
      return res
        .status(500)
        .send({ status: 'error', detail: 'Значение id должно быть числом' })
    }
  } catch (error) {
    return res.status(500).send(error)
  }
})

UserThemeRouter.post('/add', async (req, res) => {
  try {
    const id = +req.body.id
    if (typeof id === 'number') {
      await UserThemeAPI.createUserTheme(id)
      return res.status(200).send({ status: 'ok' })
    } else {
      return res
        .status(500)
        .send({ status: 'error', detail: "'Значение id должно быть числом'" })
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

UserThemeRouter.post('/update', async (req, res) => {
  try {
    const body = req.body
    await UserThemeAPI.setUserTheme(body.id, body.theme)
    return res.status(200).send({ status: 'ok' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res
      .status(500)
      .send({ status: 'error', detail: error['parent']['detail'] })
  }
})

export default UserThemeRouter
