/* eslint-disable react/prop-types */
import React from 'react'
import './addLink.css'
import { connect } from 'react-redux'
import { addLink } from '../../redux/action'

class AddLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      link: ''
    }
  }

    submitHandler = (event) => {
      event.preventDefault()
      const { link } = this.state
      if (!link.trim()) {
        return
      }

      const newLink = {
        link
      }

      console.log(link)
      this.props.addLink(newLink)
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
        <React.Fragment>
          {(this.props.show === 'addLink') && (
            <div className="signIn-popup close" onClick={(e) => { this.props.onHideSignIn(e) }}>
              <div className="addLink-container">

                <div className="signIn-header">
                  <h4>Add Link</h4>
                  <div className="close-icon close"
                  onClick={(e) => { this.props.onHideSignIn(e) }}
                  >x</div>
                </div>

                <div className="form-container">
                  <form onSubmit={this.submitHandler} method="post">

                    <div className="mail-form">
                      <input
                      className="addLink-input"
                      type="text"
                      id="link"
                      value={this.state.link}
                      name="link"
                      onChange={this.changeInputHandler}
                      placeholder="www.example.com/article.html"
                      />
                      <button className="submitBtn" type="submit">Add Link</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          )}
        </React.Fragment>
      )
    }
}

const mapDispatchToProps = {
  addLink
}

export default connect(null, mapDispatchToProps)(AddLink)
