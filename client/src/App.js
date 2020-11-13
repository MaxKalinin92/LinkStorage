import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import Register from './components/pages/register/Register'
import StartPage from './components/pages/StartPage/StartPage'

const App = () => (
  <Switch>
    <Route exact path='/' component={StartPage}/>
    <Route exact path='/user/login' component={Login}/>
    <Route exact path='/user/register' component={Register}/>
  </Switch>
)

export default App
