import React from "react";
import s from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";



const Dialogs = ({messagesData, usersData}) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems usersData={usersData} />
            <Messages messages={messagesData} />
        </div>
    )
}
export default Dialogs;