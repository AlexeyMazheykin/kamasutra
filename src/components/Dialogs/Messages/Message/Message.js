import s from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <p className={s.message}>
            {props.message}
        </p>
    );
};
export default Message;