import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsData = [

        {id:1, message: "Hi, how are you?", likes: 343},
        {id:2, message: "My first post", likes: 244},
        {id:3, message: "Hi, how are you?", likes: 748},
        {id:4, message: "Hi, how are you?", likes: 5},
    ]

    let post = postsData.map(item => <Post message={item.message} likesCount={item.likes} key={item.id} />);

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