import UserThemeModel from '../Model/UserTheme.model'

class UserThemeAPI {
  getUserTheme = (id: number) => {
    return UserThemeModel.findOne({ where: { user_id: id } }).then(
      res => res?.dataValues
    )
  }

  setUserTheme = (id: number, theme: string) => {
    return UserThemeModel.update(
      { theme: `${theme}` },
      { where: { user_id: id } }
    )
  }

  createUserTheme = (user_id: number) => {
    return UserThemeModel.create({ user_id: user_id, theme: 'Green' })
  }
}

export default new UserThemeAPI()
