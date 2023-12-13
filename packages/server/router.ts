import { Router } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import UserThemeRouter from './ThemeBD/ThemeRouters/UserThemeRouter'
import SiteThemeRouter from './ThemeBD/ThemeRouters/SiteThemeRouter'
import EmojiRouter from './EmojiDB/EmojiRouter/EmojiRouter'

const router: Router = Router()

router.use(cors())

router.use(bodyParser.json({ type: 'application/json' }))
router.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

router.use('/emoji', EmojiRouter)
router.use('/user/theme', UserThemeRouter)
router.use('/site/theme', SiteThemeRouter)

export default router
