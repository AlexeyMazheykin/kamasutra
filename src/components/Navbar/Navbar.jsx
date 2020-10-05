import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
      <ul className={s.navbar}>
        <li className={s.item}>
           <NavLink activeClassName={s.active} to="/profile">
               Profile
           </NavLink>
        </li>
        <li className={s.item}>
           <NavLink activeClassName={s.active} to="/dialogs">
               Dialogs
           </NavLink>
        </li>
        <li className={s.item}>
           <NavLink activeClassName={s.active} to="/news">
               News
           </NavLink>
        </li>
        <li className={s.item}>
           <NavLink activeClassName={s.active} to="/music">
               Music
           </NavLink>
        </li>
        <li className={s.item}>
           <NavLink activeClassName={s.active} to="/settings">
               Settings
           </NavLink>
        </li>
      </ul>
    
    );
        
}
export default Navbar;