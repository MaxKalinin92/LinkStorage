import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk
  )
))
const appStart = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)

ReactDOM.render(
  appStart,
  document.getElementById('root')
)

serviceWorker.unregister()
