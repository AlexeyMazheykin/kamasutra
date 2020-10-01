import React from 'react';
import logo from '../img/logo.png'

const Header = () => {
    return(
        <header className="header">
        <div className="header__logo">
          <img src={logo} alt={"logo"} className="header__logo-pic" />
        </div>
        </header>
    );
}
export default Header;