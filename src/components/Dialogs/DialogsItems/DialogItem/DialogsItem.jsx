import {NavLink} from "react-router-dom";
import s from "./DialogsItem.module.css";
import React from "react";



const DialogsItem = (props) => {
    return (
        <NavLink  className={s.dialogs__item} to={`/dialogs/${props.id}`} activeClassName={s.active} >
            {props.name}
        </NavLink>
    );
};
export default DialogsItem;
