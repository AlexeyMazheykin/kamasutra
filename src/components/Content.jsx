import React from 'react';
import s from './Content.module.css'
import avatar from '../img/ava.jpg'


const Content = () => {
    return (
        <div className={s.content}>
        <div className={s.img}>
          <img className={s.img__pic} src="https://tinypng.com/images/social/website.jpg" alt="logo"/>
        </div>
        <div className={s.about}>
          <div className={s.avatar}>
            <img className={s.avatar__pic} src={avatar} alt="ava" /> 
          </div>
          <div className="description">
            <h1>Alexey Mazheykin</h1>
          </div>

        </div>
        <div className="">
          My posts
          </div>
      </div>
    );
}
export default Content;