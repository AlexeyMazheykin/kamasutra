import React from 'react';
import s from './About.module.css'
import avatar from '../../../img/ava.jpg'



const About = () => {
    return (
            <div className={s.about}>
                <div className={s.avatar}>
                    <img className={s.avatar__pic} src={avatar} alt="ava"/>
                </div>
                <div className={s.desc}>
                    <h1 className={s.title}>Alexey Mazheykin</h1>
                    <div className={s.subtitle}>
                        <p>Date of Birth: 13 February</p>
                        <p>City: Moscow</p>
                        <p>Education: <a href="http://www.miigaik.ru/eng" target="_blank"
                                         rel="noopener noreferrer">MSUofG&C</a></p>
                        <p>Age: 37</p>
                    </div>
                </div>
            </div>
    );
}
export default About;