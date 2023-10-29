import express from 'express'
import { PORT } from './config.js'
import mainRouter from './routes/index.routes.js'
import taskRouter from './routes/tasks.routes.js'
const app = express()
app.use(express.json())

app.use(mainRouter)
app.use('/api/v1', taskRouter)
app.listen(PORT)

console.log(`Server on port ${PORT}: http://localhost:${PORT}`)
