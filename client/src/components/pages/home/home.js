import React, {Component} from 'react';
import './home.css';
import AddLink from './../../AddLink/AddLink'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // clicked: false,
      userData: {
          userName: 'PopovDmitriy', 
          userEmail: '447591834dp@gmail.com', 
          userPassword: 1234567890,
          id: 0
      },
      linkData: [
          {
              linkImg: 'https://cofix.by/local/templates/main/img/logo.svg',
              linkTitle: 'Cofix',
              linkUrl: 'https://cofix.by/',
              linkText: 'Международная сеть Cofix открыла уже более 180 кофеен! Ароматный свежесваренный кофе, лимонады, апельсиновый и морковный фреш, выпечка, сэндвичи, салаты, суп, пицца и десерты – все по фиксированной цене.'
          },
          {
              linkImg: 'https://static.fix-price.by/images/adaptive/logo.png',
              linkTitle: 'FixPrice',
              linkUrl: 'https://fix-price.by/',
              linkText: 'Магия HALLOWEEN '
          },
          {
              linkImg: 'https://pngimg.com/uploads/github/github_PNG40.png',
              linkTitle: 'GitHub',
              linkUrl: 'https://github.com/',
              linkText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
          },
      ]
    } 
  }

  
  render() {
    return (
        <section className="home-section page visible">
          <AddLink />
          <div className="link-container">
            {this.state.linkData.map((link) => {
              return(
                <div className='link'>
                  <div className="link-text">
                    <h3>{link.linkTitle}</h3>
                    <a href={link.linkUrl} target="_blank" rel="noopener noreferrer">{link.linkUrl}</a>
                    <p>{link.linkText}</p>
                  </div>
                  <div className="link-img">
                    <img src={link.linkImg} alt="link-img" />
                  </div>  
                </div>)
            })}
          </div>
        </section>
    )
  }
}

export default Home