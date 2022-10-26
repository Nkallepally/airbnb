import React from 'react'
import "./App.css";
import Header from './Header';
import Home from './Home';


const App = () => {
  return (
    <div className='app'>
      <Header/>
      {/* //AIRBNB CLONE
    // HOME========Header
    // Banner=====SEARCH,CARDS,FOOTER,SEARCH PAGE */}

    <Home/> 
    </div>
  )
}

export default App