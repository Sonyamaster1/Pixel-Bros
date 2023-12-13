import { Router } from 'express'
import UserThemeRouter from './ThemeBD/ThemeRouters/UserThemeRouter'
import SiteThemeRouter from './ThemeBD/ThemeRouters/SiteThemeRouter'

const router: Router = Router()

router.use('/user/theme', UserThemeRouter)
router.use('/site/theme', SiteThemeRouter)

export default router
