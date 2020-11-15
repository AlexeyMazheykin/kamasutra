import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import About from "./About/About";
import Wallpaper from "./Wallpaper/Wallpaper"


const Profile = ({state, addPostToState}) => {
    return (
        <div className={s.profile}>
            <Wallpaper src="https://tinypng.com/images/social/website.jpg" />
            <About />
            <MyPosts postsData={state.postsData} addPostToState={addPostToState}/>
        </div>
    );
}
export default Profile;