import React from "react";
import s from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";



const Dialogs = ({state}) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems usersData={state.usersData} />
            <Messages messages={state.messagesData} />
        </div>
    )
}
export default Dialogs;