const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const User = require('../models/User')
const { validateRegistrationData } = require('../middlewares')
const constants = require('../constants')

router.post('/registration', validateRegistrationData, async(req, res) => {
  try {
    const { email, password } = req.body
    const candidate = await User.findOne({ email })

    if (candidate) {
      return res.status(400).json({ message: `User with email ${email} exists` })
    }

    const hashedPassword = await bcrypt.hash(password, 1)
    const user = new User({ email, password: hashedPassword })
    await user.save()
    res.status(201).json({ message: constants.REGISTRATION_SUCCESS })
  } catch (error) {
    console.log(error)
    res.send({ message: 'serverError' })
  }
})

module.exports = router
