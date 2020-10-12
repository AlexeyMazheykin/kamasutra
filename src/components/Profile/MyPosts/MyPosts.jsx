import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({postsData}) => {


    let post = postsData.map((item, i) => <Post message={`${i}. ${item.message}`} likesCount={item.likes} key={item.id} />);

    return (
        <div className={s.myPosts}>
            <h2 className={s.myPosts__title}>
                My posts:
            </h2>
            <div className={s.posts__container}>
                <div className={s.posts__form}>
                <input type="text" defaultValue="5"/>
                <button className={s.btn}>Отправить</button>
                </div>
                {post}
            </div>
        </div>
    );
};
export default MyPosts;