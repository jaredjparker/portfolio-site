import React from 'react'
import Jump from './components/jump/Jump'
import Home from './components/home/Home'
import About from './components/about/About'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Jump />
      <Home />
      <About />
    </div>
  );
}

export default App;
