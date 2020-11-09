const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
// const config = require('config')

const app = express()

const mongoUri = config.get('mongoUri')
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.log('error'))

app.use('/api/auth', authRoutes) 

module.exports = app