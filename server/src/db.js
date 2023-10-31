import dotenv from 'dotenv'
import { createPool } from 'mysql2/promise'
import { DB_PORT } from './config.js'
dotenv.config()

export const pool = createPool({
  host: 'localhost',
  port: DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'mern_mysql_js'
})
