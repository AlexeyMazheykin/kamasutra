import React from 'react';

import ava from '../img/ava.jpg'
import s from './Header.module.css';


const Header = () => {
    return(
        <header className={s.header}>
        <div className={s.logo}>
          <img src={ava} alt={"logo"} className={s.logo__pic} />
        </div>
        </header>
    );
}
export default Header;