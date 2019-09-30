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
          strCompArr: componentsArr.map(({ name }) => name),
          dropArr: componentsArr.map(({ name }) => name),
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
      strCompArr: componentsArr.map(({ name }) => name),
      dropArr: componentsArr.map(({ name }) => name),
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
        {compArrState.map(({ name, Component }, key) => (
          <ContentCarrier 
          key={key}
          compSectClass={key === 0 ? 'jmp-pnt top-comp-space' : 'jmp-pnt'}
          compTitleID={name}
          compPassedInFromApp={Component} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default App;
