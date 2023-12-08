import { Router } from 'express'
import UserThemeRouter from './ThemeBD/ThemeRouters/UserThemeRouter'

const router: Router = Router()

router.use('/user/theme', UserThemeRouter)

export default router
