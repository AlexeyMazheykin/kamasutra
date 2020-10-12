import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {id:1, message: "Hi, how are you?", likes: 343},
    {id:2, message: "My first post", likes: 244},
    {id:3, message: "Hi, how are you?", likes: 748},
    {id:4, message: "Hi, how are you?", likes: 5},
]
let usersData = [
    {id:1, name:"Gus"},
    {id:2, name:"Alexey"},
    {id:3, name:"Nikolay"},
    {id:4, name:"Sergey"},
]
let messagesData = [
    {id:1, body: "Привет",},
    {id:2, body: "Здорова, коль не шутишь!",},
    {id:3, body: "Поккаа",},
    {id:4, body: "Привет",},
    {id:5, body: "Привет",},
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} usersData={usersData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
