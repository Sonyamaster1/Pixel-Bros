import { Router } from 'express'
import UserThemeRouter from './ThemeBD/ThemeRouters/UserThemeRouter'
import SiteThemeRouter from './ThemeBD/ThemeRouters/SiteThemeRouter'
import EmojiRouter from './EmojiDB/EmojiRouter/EmojiRouter'

const router: Router = Router()

router.use('/emoji', EmojiRouter)
router.use('/user/theme', UserThemeRouter)
router.use('/site/theme', SiteThemeRouter)

export default router
