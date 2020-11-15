import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, message: "Hi, how are you?", likes: 343},
            {id: 2, message: "My first post", likes: 244},
            {id: 3, message: "Hi, how are you?", likes: 748},
            {id: 4, message: "Hi, how are you?", likes: 5},
        ],
    },
    dialogsPage: {
            messagesData: [
                {id: 1, body: "Привет",},
                {id: 2, body: "Здорова, коль не шутишь!",},
                {id: 3, body: "Поккаа",},
                {id: 4, body: "Привет",},
                {id: 5, body: "Привет",},
            ],
            usersData: [
                {id: 1, name: "Gus", avatar: '/usersAvatar/gus.jpg'},
                {id: 2, name: "Alexey", avatar: '/usersAvatar/gus.jpg'},
                {id: 3, name: "Nikolay", avatar: '/usersAvatar/nikolay.jpeg'},
                {id: 4, name: "Sergey", avatar: '/usersAvatar/sergey.jpeg'},
            ],
        },
    sideBar: {
        friends: [

        ]
    }
}
let postCount = state.profilePage.postsData.length + 1;
export let addPostToState = (postMessage) => {
    let newPost = {
        id: postCount,
        message: postMessage,
        likes: 0
    };
    state.profilePage.postsData.push(newPost);
    ++postCount;
    renderEntireTree(state);
}
export default state;