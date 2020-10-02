import React from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Navbar from './components/Navbar';



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
