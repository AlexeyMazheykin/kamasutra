import React from "react";
import s from "./Messages.module.css"
import Message from "./Message/Message";

const Messages = ({messages}) => {


    return (
        <div className={s.messages}>
            {messages.map((message, index) => {
                return (
                    <Message key={message.id} index={index} text={message.body} />
                )
            })}
        </div>
    );
};
export default Messages;