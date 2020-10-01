import React from 'react';
import './App.css';
import logo from './img/logo.png'

const App = () => {
  return (
    <div className="App">
      <header className="header">
      <div className="header__logo">
        <img src={logo} alt={"logo"} className="header__logo-pic" />
      </div>
      </header>
      <div className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">
             profile
          </li>
          <li className="navbar__list-item">
             Messages
          </li>
          <li className="navbar__list-item">
             News
          </li>
          <li className="navbar__list-item">
             Music
          </li>
          <li className="navbar__list-item">
             Settings
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="content__img">
          <img className="content__img-pic"src="https://tinypng.com/images/social/website.jpg" />
        </div>
        
      </div>
    </div>
  )
}

export default App;
