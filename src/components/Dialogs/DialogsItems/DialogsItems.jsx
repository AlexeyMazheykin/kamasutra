import React from "react";
import s from "./DialogsItems.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
let usersData = [
    {id:1, name:"Gus"},
    {id:2, name:"Alexey"},
    {id:3, name:"Nikolay"},
    {id:4, name:"Sergey"},
]
const DialogsItems = () => {

    return (
        <div className={s.dialogs__items}>
            <DialogsItem name={usersData[0].name} id={usersData[0].id} />
            <DialogsItem name={usersData[1].name} id={usersData[1].id} />
            <DialogsItem name={usersData[2].name} id={usersData[2].id} />
            <DialogsItem name={usersData[3].name} id={usersData[3].id} />
        </div>
    );
};
export default DialogsItems;
