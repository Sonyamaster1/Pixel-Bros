import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import SiteThemeModel from './ThemeBD/Model/SiteTheme.model'
import UserThemeModel from './ThemeBD/Model/UserTheme.model'
// import dotenv from 'dotenv'
// import * as process from 'process'
// dotenv.config({ path: '../../.env.sample' })

// const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
//   process.env

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  dialect: 'postgres',
  username: 'postgres',
  password: '1111',
  port: 5432,
  database: 'Theme',
}

const sequelize = new Sequelize(sequelizeOptions)
sequelize.addModels([SiteThemeModel, UserThemeModel])

async function connectDB() {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    console.log('Подключение завершено')
  } catch (error) {
    console.log(error)
  }
}

connectDB()

// export const createClientAndConnect = async (): Promise<Client | null> => {
//   try {
//     const client = new Client({
//       user: POSTGRES_USER,
//       host: 'localhost',
//       database: POSTGRES_DB,
//       password: POSTGRES_PASSWORD,
//       port: Number(POSTGRES_PORT),
//     })

//     await client.connect()

//     const res = await client.query('SELECT NOW()')
//     console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
//     await client.end()

//     return client
//   } catch (e) {
//     console.error(e)
//   }

//   return null
// }
