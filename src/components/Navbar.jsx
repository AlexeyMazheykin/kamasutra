import React from 'react';
import s from './Navbar.module.css';
console.log(s)

const Navbar = () => {
    return (
      
      <ul className={s.navbar}>
        <li className={s.item}>
           Profile
        </li>
        <li className={s.item}>
           Messages
        </li>
        <li className={s.item}>
           News
        </li>
        <li className={s.item}>
           Music
        </li>
        <li className={s.item}>
           Settings
        </li>
      </ul>
    
    );
        
}
export default Navbar;