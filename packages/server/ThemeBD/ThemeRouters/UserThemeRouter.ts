import { Router } from 'express'
import UserThemeAPI from '../Controllers/UserThemeAPI'

const UserThemeRouter = Router()

UserThemeRouter.get('/:id', async (req, res) => {
  try {
    const userTheme = await UserThemeAPI.getUserTheme(+req.params.id)
    console.log(req.body)
    return res.status(200).send({ user_theme: userTheme })
  } catch (error) {
    return res.status(500).send(error)
  }
})

UserThemeRouter.post('/', async (req, res) => {
  console.log(req)
  try {
    const { body } = req.body
    UserThemeAPI.setUserTheme(body.id, body.theme)
    return res.status(200).send({ res: true })
  } catch (error) {
    return res.status(500).send(error)
  }
})

export default UserThemeRouter
