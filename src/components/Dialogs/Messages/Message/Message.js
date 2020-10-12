import s from "./Message.module.css";
import React from "react";

const Message = ({text, index}) => {
    return (
        <p className={s.message}>
            {text}
        </p>
    );
};
export default Message;
