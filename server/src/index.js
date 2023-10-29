import app from './app.js'
import { PORT } from './config.js'
;(async () => {
  app()
  console.log(`Server on port ${PORT}: http://localhost:${PORT}`)
})()
