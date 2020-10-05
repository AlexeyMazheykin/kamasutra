import s from "./Wallpaper.module.css";
import React from "react";

const Wallpaper = (props) => {
    return (
        <div className={s.wallpaper} >
            <img className={s.wallpaper__pic} src={props.src} alt="user-wallpaper"/>
        </div>
    )
}
export default Wallpaper;