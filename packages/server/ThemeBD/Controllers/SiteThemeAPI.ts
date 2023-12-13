import SiteThemeModel from '../Model/SiteTheme.model'

class SiteThemeAPI {
  setSiteTheme = (theme: string) => {
    return SiteThemeModel.create({ theme: `${theme}` })
  }
}

export default new SiteThemeAPI()
