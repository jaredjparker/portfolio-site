import React, { Component } from 'react'
import Jump from './components/jump/Jump'
import Footer from './components/footer/Footer'
import ContentCarrier from './components/contentCarrier/ContentCarrier'
import componentsArr from './centralData/appComponents'
import './App.css'

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          compArrState: componentsArr
      }
  }

  handleClick = () => {
    console.log(this)
  }

  render() {

    const { compArrState } = this.state

    return (
      <div className="app-container">
        <Jump 
        compArrFromApp={compArrState}
        appAnchorTagsArr={compArrState}
        appMixDivFun={this.handleClick} />
        {compArrState.map((item, key) => (
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
}

export default App;
