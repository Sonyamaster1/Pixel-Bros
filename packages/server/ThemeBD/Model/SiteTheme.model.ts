/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Model,
  DataType,
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  AllowNull,
  Index,
  Unique,
} from 'sequelize-typescript'

interface ISiteThemeModel {
  themeId?: number
  theme: string
}

@Table({
  tableName: 'SiteTheme',
  timestamps: false,
  paranoid: true,
})
class SiteThemeModel extends Model<SiteThemeModel, ISiteThemeModel> {
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare themeId: number

  @Index
  @PrimaryKey
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING)
  declare theme: string
}

export default SiteThemeModel
