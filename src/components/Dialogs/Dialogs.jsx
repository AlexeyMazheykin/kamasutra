import React from "react";
import s from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <DialogsItems />
            <Messages />
        </div>
    )
}
export default Dialogs;