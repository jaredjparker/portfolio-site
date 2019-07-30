import React from 'react'
import Jump from './components/jump/Jump'
import ContentCarrier from './components/contentCarrier/ContentCarrier'
import componentsArr from './centralData/appComponents'
import './App.css'

function App() {

  let appAnchorStrings = componentsArr.map(item => item.type.name)

  return (
    <div className="app-container">
      <Jump appAnchorTagsArr={appAnchorStrings} />
      {componentsArr.map((item, key) => (
        <ContentCarrier 
        key={key} 
        compTitleID={item.type.name}
        compPassedInFromApp={item} />
      ))}
    </div>
  );
}

export default App;
