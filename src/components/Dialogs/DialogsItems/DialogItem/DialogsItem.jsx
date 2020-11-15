import {NavLink} from "react-router-dom";
import s from "./DialogsItem.module.css";
import React from "react";



const DialogsItem = ({user, index}) => {
    return (
        <NavLink  className={s.dialogs__item} to={`/dialogs/${index}`} activeClassName={s.active} >
            <div className={s.user__avatar}>
                <img src={user.avatar} alt=""/>
            </div>
            <p>{user.name}</p>
        </NavLink>
    );
};
export default DialogsItem;
