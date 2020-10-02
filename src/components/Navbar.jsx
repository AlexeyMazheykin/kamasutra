import React from 'react';
import s from './Navbar.module.css';
console.log(s)

const Navbar = () => {
    return (
      <div className={s.navbar}>
      <ul className={s.list}>
        <li className={s.item}>
           profile
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
    </div>
    );
        
}
export default Navbar;