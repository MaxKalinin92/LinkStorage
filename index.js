const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()

const PORT = config.get('serverPort')
const MONGO_URI = config.get('mongoURI')
const MONGO_OPTIONS = config.get('mongoOptions')

const start = async() => {
  try {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.log('The server or database failed')
  }
}

start()
