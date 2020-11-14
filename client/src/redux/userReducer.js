/* eslint-disable default-param-last */
import { ADD_LINK, LOGIN_USER } from './types'

const initialState = {
  user: [],
  links: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK:
      return { ...state, links: [...state.links, action.payLoad] }
    case LOGIN_USER:
      return { ...state, user: action.payLoad }
    default:
      return state
  }
}
