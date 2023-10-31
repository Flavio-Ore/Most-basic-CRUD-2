import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { PORT } from './config.js'
import mainRouter from './routes/index.routes.js'
import taskRouter from './routes/tasks.routes.js'

export default function application () {
  const app = express()
  app.use(morgan('dev'))
  app.use(express.json())
  app.use(cors())
  app.use(mainRouter)
  app.use('/api/v1', taskRouter)
  app.listen(PORT)
}
