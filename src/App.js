import React from 'react';
import Questitems from './Components/Questitems'
import Header from './Components/Header'
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg">
      <Header/>
      <Questitems/>
      <Footer/>
    </div>
  );
}

export default App;
