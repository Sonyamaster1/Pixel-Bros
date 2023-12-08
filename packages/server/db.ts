import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import SiteThemeModel from './ThemeBD/Model/SiteTheme.model'
import UserThemeModel from './ThemeBD/Model/UserTheme.model'
import dotenv from 'dotenv'
import * as process from 'process'
dotenv.config({ path: '../../.env.sample' })

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

// const sequelizeOptions: SequelizeOptions = {
//   host: 'localhost',
//   dialect: 'postgres',
//   username: 'postgres',
//   password: '1111',
//   port: 5432,
//   database: 'Theme',
// }

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  dialect: 'postgres',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  port: POSTGRES_PORT as unknown as number,
  database: POSTGRES_DB,
}

const sequelize = new Sequelize(sequelizeOptions)
sequelize.addModels([SiteThemeModel, UserThemeModel])

async function connectDB() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Подключение завершено')
  } catch (error) {
    console.error(error)
  }
}

export default connectDB
