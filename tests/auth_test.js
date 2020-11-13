const app = require('../index')
const { expect } = require('chai')
const request = require('supertest')(app)
const constants = require('../constants')
const mongoose = require('mongoose')
const config = require('config')

const MONGO_URI = config.get('mongoURI')
const MONGO_OPTIONS = config.get('mongoOptions')

const AUTH_PATH = '/api/auth'

describe('post registration', () => {
  before(async() => {
    await mongoose.connect(MONGO_URI, MONGO_OPTIONS)
  })

  describe('registration with valid email', () => {
    const validEmails = [
      'test11@mail.com',
      'validmaild@mail.ru',
      'email@example.com',
      'firstname.lastname@example.com',
      'email@subdomain.example.com',
      'firstname+lastname@example.com',
      '"email"@example.com',
      '1234567890@example.com',
      'email@example-one.com',
      '_______@example.com',
      'email@example.name',
      'email@example.museum',
      'email@example.co.jp',
      'firstname-lastname@example.com'
    ]

    validEmails.forEach(email => {
      it(`${email}`, async() => {
        const response = await request
          .post(`${AUTH_PATH}/registration`)
          .send({ email, password: 'hardPassword12sdjgf' })
        expect(response.status).to.eql(201)
        expect(response.body.message).to.eql(constants.REGISTRATION_SUCCESS)
      })
    })
  })

  describe('registration with invalid email', () => {
    const invalidEmails = [
      '',
      'plainaddress',
      '#@%^%#$@#$@#.com',
      '@example.com',
      'Joe Smith <email@example.com>',
      'email.example.com',
      'email@example@example.com',
      '.email@example.com',
      'email.@example.com',
      'email..email@example.com',
      'あいうえお@example.com',
      'email@example.com (Joe Smith)',
      'email@example',
      'email@-example.com',
      'email@example.web',
      'email@111.222.333.44444',
      'email@example..com',
      'Abc..123@example.com'
    ]

    invalidEmails.forEach(async(email) => {
      it(`${email}`, async() => {
        const invalidEmail = 'invalidemadfilmail.ru'
        const response = await request
          .post(`${AUTH_PATH}/registration`)
          .send({ email: invalidEmail, password: '123455' })
        expect(response.status).to.eql(400)
        expect(response.body.message).to.eql(constants.REGISTRATION_ERROR_EMAIL_VALIDATION)
      })
    })
  })

  describe('registration with valid email but invalid password', () => {
    const invalidPasswords = [
      '123456',
      'password',
      '123456789',
      '12345',
      '12345678',
      'qwerty',
      '1234567',
      '111111',
      '1234567890',
      '123123',
      '1234',
      'iloveyou',
      '000000',
      'dragon',
      'sunshine',
      'princess',
      'letmein',
      '654321',
      'monkey',
      '27653',
      '123321',
      'qwertyuiop',
      'superman',
      'asdfghjkl'
    ]
    invalidPasswords.forEach((password, idx) => {
      it(`${password}`, async() => {
        const response = await request
          .post(`${AUTH_PATH}/registration`)
          .send({ email: `validEmail${idx}@gmail.com`, password })
        expect(response.status).to.eql(400)
        expect(response.body.message).to.eql(constants.REGISTRATION_ERROR_PASSWORD_VALIDATION_WEAK)
      })
    })
  })
  after(async() => {
    await mongoose.connection.db.collection('users').drop()
    await mongoose.connection.close()
  })
})
