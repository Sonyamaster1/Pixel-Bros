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

@Table({
  tableName: 'SiteTheme',
  timestamps: false,
  paranoid: true,
})
class SiteThemeModel extends Model<SiteThemeModel> {
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
