import dotenv from 'dotenv'
import express from 'express'
import { postRoutes } from './src/routes/posts.js'
import { initDB } from './src/db/initdb.js'
import bodyParser from 'body-parser'


dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors()) //accept requests from different origins
//cors = cross origin resource sharing
//cors is for security reasons, browsers block requests from different origins by default

app.get('/', (req, res) => {
    res.send('Hello World!')
})

await initDB()
postRoutes(app)

export {app}
