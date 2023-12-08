import { Router } from 'express'
import UserThemeAPI from '../Controllers/UserThemeAPI'
const UserThemeRouter = Router()

UserThemeRouter.get('/:id/theme', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (!isNaN(id)) {
      const userTheme = await UserThemeAPI.getUserTheme(id)
      if (typeof userTheme !== 'undefined') {
        return res.status(200).send(userTheme)
      } else {
        UserThemeAPI.createUserTheme(id)
        return res.status(200).send({ user_id: id, theme: 'Green' })
      }
    } else {
      return res.status(500).send('Значение id должно быть числом')
    }
  } catch (error) {
    return res.status(500).send(error)
  }
})

UserThemeRouter.post('/theme', async (req, res) => {
  try {
    const body = req.body
    await UserThemeAPI.setUserTheme(body.id, body.theme)
    return res.status(200).send({ status: 'ok' })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return res.status(500).send(error['parent']['detail'])
  }
})

export default UserThemeRouter
