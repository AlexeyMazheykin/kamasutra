import React from "react";
import s from "./DialogsItems.module.css"
import DialogsItem from "./DialogItem/DialogsItem";

const DialogsItems = ({usersData}) => {

    return (
        <div className={s.dialogs__items}>
            {usersData.map((user, index) => {
                    return (
                        <DialogsItem user={user} index={index} key={user.id}/>
                    )
            } )}
        </div>
    );
};
export default DialogsItems;
