/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../../redux/action'
import './register.css'

class Register extends Component {
  state = {
    newEmail: '',
    newPassword: ''
  }

  submitHandler = (event) => {
    event.preventDefault()
    const { newEmail, newPassword } = this.state
    if (!newEmail.trim()) {
      return
    }

    const user = {
      newEmail,
      newPassword
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
            <button className="signInBtn"><Link to='/user/login'>Sign In</Link>
            </button>
          </div>
        </header>
        <div className="login-block">
              <div className="login-container">

                <div className="signIn-header">
                  <h2>
                    Create an Account
                  </h2>
                </div>

                <div className="form-container">
                  <form onSubmit={this.submitHandler} method="post">

                    <div className="mail-form">
                      <label className="signIn-label" htmlFor="email">
                        Email
                      </label>
                      <input
                      className="signIn-input"
                      type="text"
                      id="newEmail"
                      value={this.state.newEmail}
                      name="newEmail"
                      onChange={this.changeInputHandler}
                      />
                    </div>

                    <div className="mail-form">
                      <label className="signIn-label" htmlFor="newPassword">Password</label>
                      <input className="signIn-input"
                      type="Password"
                      id="newPassword"
                      value={this.state.newPassword}
                      name="newPassword"
                      onChange={this.changeInputHandler}
                      />
                    </div>

                    <div className="submit-block">
                      <button className="submitBtn" type="submit">Create Account</button>
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

export default connect(null, mapDispatchToProps)(Register)
