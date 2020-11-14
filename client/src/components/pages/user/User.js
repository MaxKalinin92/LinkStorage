import React, { Component } from 'react'
import { Switch, /* Route, */ Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { HomeIcon, LikeIcon, ArchiveIcon, VideoIcon, SearchIcon, MenuIcon } from '../../../icons'
import './user.css'
import AddLink from './../../AddLink/AddLink'

class User extends Component {
  state = {
    showModal: false,
    headerTitle: 'Link Storage',
    showMenu: false
  }

  getModal = (value) => {
    this.setState({ showModal: value })
  };

  hideModal = (e) => {
    if (e.target.classList.contains('close')) {
      this.setState({ showModal: false })
    }
  };

  showMenu = (e) => {
    const aSide = e.target.closest('.menuBtn').nextSibling
    aSide.classList.add('to-right')
    aSide.classList.add('visible')
    setTimeout(() => {
      aSide.classList.remove('to-left', 'to-right')
    }, 500)
  }

  closeMenu = (e) => {
    if (e.target.classList.contains('aside-block')) {
      const aSide = e.target
      aSide.classList.add('to-left')
      setTimeout(() => {
        aSide.classList.remove('to-right', 'to-left')
        aSide.classList.remove('visible')
      }, 500)
    }
  }

  render() {
    return (
      <main className="main-page">
        <div onClick={(e) => this.showMenu(e)} className="menuBtn">
                <MenuIcon/>
        </div>
        <aside className="aside-block to-left" onClick={(e) => this.closeMenu(e)}>
          <div className="logo-wrapper">
            <div className="logo">
              <Link to='/user' className='link-inherit'>
                <span>Link</span><span>Storage</span></Link>
            </div>
          </div>
          <nav className="aside-container">
            <ul className="aside-inner">
              <Link to="/user" className="aside-link"
                onClick={() => { this.setState({ headerTitle: 'Link Store' }) }}
              >
                <li className="aside-links">
                  <HomeIcon className="aside-link"/>
                  <h3 className="aside-text">Home</h3>
                </li>
              </Link>
              <Link to="/liked" className="aside-link"
                onClick={() => { this.setState({ headerTitle: 'Liked' }) }}
              >
                <li className="aside-links">
                  <LikeIcon className="aside-link"/>
                  <h3 className="aside-text">Liked</h3>
                </li>
              </Link>
              <Link to="/archive" className="aside-link"
                onClick={() => { this.setState({ headerTitle: 'Archive' }) }}
              >
                <li className="aside-links">
                  <ArchiveIcon className="aside-link"/>
                  <h3 className="aside-text">Archive</h3>
                </li>
              </Link>
              <Link to="/video" className="aside-link"
                onClick={() => { this.setState({ headerTitle: 'Video' }) }}
              >
                <li className="aside-links">
                  <VideoIcon className="aside-link"/>
                  <h3 className="aside-text">Video</h3>
                </li>
              </Link>
            </ul>
          </nav>
          <div className="hr"></div>
        </aside>
        <section className="right-side to-left">
          <div className="mobile-popup"></div>
          <header className="main-header">
            <div className="header-wrapper">
              <form className="search-block">
                <SearchIcon className="search-icon" />
                <input className="search-text" type="text" name="" id="" placeholder="Search"/>
              </form>
              <div className="addLink-block">
                <button
                  className="addLink-btn"
                  onClick={() => this.getModal('addLink')}>Add
                </button>
                <AddLink
                  show={this.state.showModal}
                  onHideSignIn={this.hideModal}
                />
              </div>
              <div className="login-block">
                <div>userLogin</div>
              </div>
            </div>
            <div className="mobile-header">
              <div className="mobile-header-title">{this.state.headerTitle}</div>
            </div>
          </header>
          <div className="page-container">
            <Switch>
              {/* <Route to="/user/main" component={}/>
              <Route to="/user/liked" component={}/>
              <Route to="/user/archive" component={}/>
              <Route to="/user/videos" component={}/>
              <Route to="/user/main" component={}/>
              */}
            </Switch>
          </div>
        </section>
        <div className="mobile"></div>
      </main>
    )
  }
}

const mapDispatchToProps = {
  // loginUser
}

export default connect(null, mapDispatchToProps)(User)
