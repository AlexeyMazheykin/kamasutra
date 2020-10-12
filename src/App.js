import React from 'react';
import './App.css';

import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";

import {Route, BrowserRouter, Redirect} from "react-router-dom";




const App = ({messagesData, postsData, usersData}) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div className="content__wrap" >
                    <Redirect exact from="/" to="/profile" />
                    <Route path="/profile" render={(props) =>
                        <Profile {...props} postsData={postsData} />
                    }
                    />
                    <Route path="/dialogs" render={() =>
                        <Dialogs  messagesData={messagesData} usersData={usersData} />
                    }
                    />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default App;
