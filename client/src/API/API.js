import { post } from 'axios'
const BASE_URL = 'http://localhost:5000/api/auth/'

// FIXME catch errors
class API {
  sendRegistrationData = async (data) => {
    const response = await post(BASE_URL + 'registration', data)
    return response
  }

  sendNewLink = async (data) => {
    // try {
    // const response = await post(BASE_URL + 'newLink', data)
    return { data: { linkTitle: 'test' } }
    // } catch (error) {
    // console.log('', error)
    // }
  }

  sendSignInData = async (data) => {
    const response = await post(BASE_URL + 'login', data)
    return response
  }

  sendConfirmationRequest = async (confirmationToken) => {
    const response = await post(BASE_URL + 'validate-email/' + confirmationToken)
    return response
  }

  takeLinkData = async (data) => {
    const response = await fetch('https://my-json-server.typicode.com/Gaziz666/demo/posts')
    return response.json()
  }
}

export default new API()
