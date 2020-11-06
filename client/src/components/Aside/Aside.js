import React, {Component} from 'react';
import {HomeIcon, LikeIcon, PriceIcon, FolderIcon } from '../../icons';
import './Aside.css'

class Aside extends Component {
  state = {
      
  }
  handleClick = (event) => {
    switch (event.target.closest('li').getAttribute('id')){
      case 'folder':
        document.querySelectorAll('.page').forEach((page) => {
          if (page.classList.contains('folders-section')) {
            page.classList.add('visible')
          } else {
            page.classList.remove('visible')
          }
        })
      break;
      case 'home':
        document.querySelectorAll('.page').forEach((page) => {
          if (page.classList.contains('home-section')) {
            page.classList.add('visible')
          } else {
            page.classList.remove('visible')
          }
        })
      break;
      default :
    };
      
    
  }

  handleChange = (event) => {
    
  }
  handleSubmit = () => {
    
  }
  
  render() {
    return (
      <aside className="aside-container">
          <ul className="aside-inner">
            <li id="home" className="aside-links" onClick={this.handleClick}>
              <HomeIcon />
              <h3 className="aside-menu" >Home</h3>
            </li>
            <li className="aside-links">
              <LikeIcon />
              <h3 className="aside-menu">Like</h3>
            </li>
            <li className="aside-links">
              <PriceIcon />
              <h3 className="aside-menu">Tags</h3>
            </li>
            <li id="folder" className="aside-links" onClick={this.handleClick}>
              <FolderIcon />
              <h3 className="aside-menu">Folder</h3>
            </li>
          </ul>
      </aside>
    )
  }
}

export default Aside