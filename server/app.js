//load all env vars from our .env file
require('dotenv').config()

//import modules
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const config = require('./config')

//cross origin resource sharing to allow react side to get access
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:5173',
}
app.use(cors(corsOptions))

//import port from config
const port = config.port

//setup mongo db
const databaseUrl = config.databaseUrl
mongoose.connect(databaseUrl)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

//import routers from routes
const indexRouter = require('./routes/index')
const articlesRouter = require('./routes/articles')

//allows our server to accept json input
app.use(express.json())

//include routers
const API_BASE = `/api/${config.apiVersion}`
app.use(API_BASE, indexRouter)
app.use(`${API_BASE}/articles`, articlesRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
