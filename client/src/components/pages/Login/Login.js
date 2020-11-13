/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { connect } from 'react-redux'
import { loginUser } from './../../../redux/action'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  submitHandler = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    if (!email.trim()) {
      return
    }

    const user = {
      email,
      password
    }

    console.log(user)
    this.props.loginUser(user)
  }

  changeInputHandler = (event) => {
    event.persist()
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value
      }
    }))
  }

  render() {
    return (
    <main className="start-page">
      <header className="start-header">
        <div className="logo">
          <span>Link</span><span>Storage</span>
        </div>
        <div className="signIn">
          <button className="signInBtn"><Link to='/user/register'>Create Account</Link>
          </button>
        </div>
      </header>
      <div className="login-block">
        <div className="login-container">

          <div className="signIn-header">
            <h2>Sign In</h2>
          </div>

          <div className="login-error">
            <p>Sorry, a user with that login email does not exist.</p>
          </div>
          <div className="form-container">
              <form onSubmit={this.submitHandler}
                method="post">

                <div className="mail-form">
                  <label className="signIn-label" htmlFor="email">Email</label>
                  <input
                    className="signIn-input"
                    type="text"
                    id="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.changeInputHandler}
                    />
                </div>

                <div className="mail-form">
                  <label className="signIn-label" htmlFor="password">Password</label>
                  <input className="signIn-input"
                    type="password"
                    id="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.changeInputHandler}
                    />
                </div>

                <div className="submit-block">
                  <button className="submitBtn" type="submit">Sign In</button>
                </div>

              </form>
            </div>

          </div>
        </div>

    </main>
    )
  }
}

const mapDispatchToProps = {
  loginUser
}

export default connect(null, mapDispatchToProps)(Login)
