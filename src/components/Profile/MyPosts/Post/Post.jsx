import React from 'react';
import s from './Post.module.css'
import avatar from '../../../../img/ava.jpg'
import { AiOutlineLike } from 'react-icons/ai/';
import { IconContext } from "react-icons";



const Post = (props) => {

    return (
        <div className={s.post}>
            <div className={s.post__pic}>
                <img src={avatar} alt="avatar"/>
            </div>
            <p>
                {props.message}
            </p>
            <span className={s.likes__count}><AiOutlineLike /> {props.likesCount}</span>

            <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                <div>
                    <AiOutlineLike />
                </div>
            </IconContext.Provider>
        </div>
    );
}
export default Post;