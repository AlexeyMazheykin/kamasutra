import s from "./Wallpaper.module.css";
import React from "react";

const Wallpaper = (props) => {
    let walpapper = React.createRef();
    let counter = 1;
    let changeWalp = () => {
        if (counter % 2 !== 0) {
            walpapper.current.src = 'https://proprikol.ru/wp-content/uploads/2020/03/sinij-czvet-krasivye-kartinki-1.jpg';
        } else {
            walpapper.current.src = props.src
        }
        counter++
    }
    return (
        <div className={s.wallpaper} >
            <img onClick={changeWalp} className={s.wallpaper__pic} src={props.src} alt="user-wallpaper" ref={ walpapper }/>
        </div>
    )
}
export default Wallpaper;