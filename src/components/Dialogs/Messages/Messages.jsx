import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";

const Messages = (props) => {

    let messageData = [
        {id:1, message: "Привет",},
        {id:2, message: "Здорова, коль не шутишь!",},
        {id:3, message: "Поккаа",},
        {id:4, message: "Привет",},
        {id:5, message: "Привет",},
    ]

    return (
        <div className={s.messages}>
            <Message message={messageData[0].message} />
            <Message message={messageData[1].message} />
            <Message message={messageData[2].message} />
            <Message message={messageData[3].message} />
        </div>
    );
};
export default Messages;