import React from 'react';
import './App.css';
import Content from './components/content';
import Header from './components/header';
import Navbar from './components/navbar';



const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
};

export default App;
