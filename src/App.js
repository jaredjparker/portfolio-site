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
          strCompArr: componentsArr.map(item => item[0]),
          dropArr: componentsArr,
          compArrState: componentsArr,
          mixedArr: []
      }
  }


  handleClick = (e) => {
    let strCompItemIndx = this.state.strCompArr.indexOf(e.target.innerText)
    this.state.mixedArr.push(componentsArr[strCompItemIndx])

    this.setState({compArrState: this.state.mixedArr})
  }

  resetClick = () => {
    this.setState({
      strCompArr: componentsArr.map(item => item[0]),
      dropArr: componentsArr,
      compArrState: componentsArr,
      mixedArr: []
    })
  }

  render() {

    const { compArrState, dropArr } = this.state

    return (
      <div className="app-container">
        <Jump 
        compArrFromApp={dropArr}
        appAnchorTagsArr={compArrState}
        appMixDivFun={this.handleClick}
        resetFromApp={this.resetClick}
         />
        {compArrState.map((item, key) => (
          <ContentCarrier 
          compSectKey={key}
          compSectClass={key === 0 ? 'jmp-pnt top-comp-space' : 'jmp-pnt'}
          compTitleID={item[0]}
          compPassedInFromApp={item[1]} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
