// import SiteThemeModel from "../Model/SiteTheme.model";
import UserThemeModel from '../Model/UserTheme.model'

export async function getUserTheme(id: number) {
  return UserThemeModel.findOne({ where: { user_id: id } })
}

// export async function setUserTheme(id: number, theme: number) {
//     return UserThemeModel
// }
