import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript'

@Table({
  tableName: 'Emoji',
  timestamps: false,
  paranoid: true,
})
class Emoji extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column(DataType.INTEGER)
  emojiId: number | undefined

  @AllowNull(false)
  @Column(DataType.STRING(50))
  emoji: string | undefined
}

export default Emoji
