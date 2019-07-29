import React from 'react'
import Jump from './components/jump/Jump'
import componentsArr from './centralData/appComponents'
import './App.css'

function App() {

  let compIDArr = componentsArr.map(item => item.type.name)

  return (
    <div className="app-container">
      <Jump anchorTagsArr={compIDArr} />
      {componentsArr.map((item) => item)}
      {console.log(compIDArr)}
    </div>
  );
}

export default App;
