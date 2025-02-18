//load all env vars from our .env file
require('dotenv').config()

//import modules
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//cross origin resource sharing to allow react side to get access
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:5137',
}
app.use(cors(corsOptions))

//import port from config
const port = require('./config').port

//setup mongo db
const databaseUrl = require('./config').databaseUrl
mongoose.connect(databaseUrl)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB'))

//import routers from routes
const indexRouter = require('./routes/index')
const entriesRouter = require('./routes/entries')

//allows our server to accept json input
app.use(express.json())

//include routers
app.use('', indexRouter)
app.use('/entries', entriesRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
