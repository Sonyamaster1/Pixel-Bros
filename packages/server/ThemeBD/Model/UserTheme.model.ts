/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  DataType,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript'
import SiteThemeModel from './SiteTheme.model'

@Table({
  tableName: 'UserTheme',
  timestamps: false,
  paranoid: true,
})
class UserThemeModel extends Model<UserThemeModel> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare user_id: number

  @BelongsTo(() => SiteThemeModel, {
    foreignKey: 'theme',
    as: 'Theme',
    onDelete: 'CASCADE',
  })
  // @ForeignKey(() => SiteThemeModel)
  @AllowNull(false)
  @Column(DataType.STRING)
  declare theme: string
}

export default UserThemeModel
