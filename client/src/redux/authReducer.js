import { createSlice } from '@reduxjs/toolkit'
import { reset, stopSubmit } from 'redux-form'
import { AuthAPI } from '../API/AuthAPI'

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    isEmailSended: false,
    validationError: null,
    showRegistration: false,
    showSignIn: false,
    email: null || localStorage.getItem('email'),
    token: null || localStorage.getItem('token'),
    signInRequestInProgress: false,
    signInRequestUpProgress: false
  },
  reducers: {
    showRegistrationModal(state, action) {
      state.showRegistration = action.payload
    },
    showSignInModal(state, action) {
      state.showSignIn = action.payload
    },
    setToken(state, action) {
      state.token = action.payload
    },
    login(state, action) {
      state.email = action.payload
    },
    logout(state, action) {
      localStorage.removeItem('token')
      state.token = null
    },
    toggleEmailSended(state, action) {
      state.isEmailSended = !state.isEmailSended
    },
    toggleProgressSignIn(state) {
      state.signInRequestInProgress = !state.signInRequestInProgress
    },
    toggleProgressSignUp(state) {
      state.signInRequestUpProgress = !state.signInRequestUpProgress
    },
    setValidationError(state, action) {
      state.validationError = action.payload
    }
  }
})

export const sendRegistrationData = (data) => async (dispatch) => {
  dispatch(toggleProgressSignUp())
  try {
    const res = await new AuthAPI().sendRegistrationData(data)
    dispatch(toggleProgressSignUp())
    dispatch(toggleEmailSended(res.data.message))
    dispatch(reset('registration'))
    setTimeout(() => {
      dispatch(toggleEmailSended(false))
    }, 6000)
  } catch (err) {
    dispatch(stopSubmit('registration', { _error: err.response.data.message }))
    dispatch(toggleProgressSignUp())
  }
}

export const sendSignInData = (data) => async (dispatch) => {
  dispatch(toggleProgressSignIn())
  try {
    const res = await new AuthAPI().sendSignInData(data)
    dispatch(login(data.email))
    dispatch(toggleProgressSignIn())
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('email', data.email)
    dispatch(setToken(res.data.token))
  } catch (err) {
    dispatch({ type: 'RESET_SIGN_IN_PASSWORD' })
    dispatch(stopSubmit('signIn', { _error: err.response.data.message }))
    dispatch(toggleProgressSignIn())
  }
}

export const validateEmail = (confirmationToken) => async (dispatch) => {
  try {
    await new AuthAPI().sendConfirmationRequest(confirmationToken)
    dispatch(setToken(confirmationToken))
    localStorage.setItem('token', confirmationToken)
  } catch (err) {
    dispatch(setValidationError(err.response.data.message))
  }
}

export const {
  showRegistrationModal,
  showSignInModal,
  toggleEmailSended,
  login,
  logout,
  setToken,
  toggleProgressSignIn,
  toggleProgressSignUp,
  setValidationError
} = authReducer.actions

export default authReducer.reducer
