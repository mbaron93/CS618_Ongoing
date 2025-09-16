import dotenv from 'dotenv'
import express from 'express'
import { postRoutes } from './src/routes/posts.js'
import { initDB } from './src/db/initdb.js'


dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

await initDB()
postRoutes(app)

export {app}
