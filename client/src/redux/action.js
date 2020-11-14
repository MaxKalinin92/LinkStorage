import { LOGIN_USER, SEND_USER, ADD_LINK } from './types'

export function sendUser() {
  return async dispatch => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const json = await response.json()
    dispatch({ type: SEND_USER, payLoad: json })
  }
}

export function loginUser(post) {
  return {
    type: LOGIN_USER,
    payLoad: post
  }
}

export function addLink(post) {
  return {
    type: ADD_LINK,
    payLoad: post
  }
}
