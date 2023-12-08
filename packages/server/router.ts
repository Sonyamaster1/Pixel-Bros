import { Router } from 'express'
import bodyParser from 'body-parser'
import UserThemeRouter from './ThemeBD/ThemeRouters/UserThemeRouter'

const router: Router = Router()

router.use(bodyParser.json({ type: 'application/json' }))
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

router.use('/user', UserThemeRouter)

export default router
