import React from 'react'
import Jump from './components/jump/Jump'
import Footer from './components/footer/Footer'
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
        compSectKey={key}
        compSectClass={key === 0 ? 'jmp-pnt top-comp-space' : 'jmp-pnt'}
        compTitleID={item.type.name}
        compPassedInFromApp={item} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
