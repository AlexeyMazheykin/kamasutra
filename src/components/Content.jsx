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
          <div className={s.desc}>
            <h1 className={s.title}>Alexey Mazheykin</h1>
            <div className={s.subtitle}>
            <p>Date of Birth: 13 February</p>
            <p>City: Moscow</p>
            <p>Education: <a href="http://www.miigaik.ru/eng" target="_blank" rel="noopener noreferrer">MSUofG&C</a></p>
            <p>Age: 37</p>
          </div>
          </div>

        </div>
        <div className="">
          My posts
          </div>
      </div>
    );
}
export default Content;