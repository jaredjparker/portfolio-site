import React from 'react'
import Jump from './components/jump/Jump'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Jump />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
