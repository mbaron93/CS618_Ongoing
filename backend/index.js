import dotenv from 'dotenv'
dotenv.config()

import { app } from './app.js'
import { initDB } from './src/db/initdb.js'

try {
  await initDB()
  const PORT = process.env.PORT
  app.listen(PORT)
  console.info(`express server running on http://localhost:${PORT}`)
} catch (err) {
  console.error('error connecting to database:', err)
}