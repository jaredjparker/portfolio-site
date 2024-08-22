import React, { Component } from 'react'
import Health from '../Health'
import Chess from '../Chess'
import TicTacToe from '../TicTacToe'
import SliderBtn from './SliderBtn'
import { CSSTransition } from 'react-transition-group'
import './ProjectSlider.css'

let switchComponents = [
    { name: 'Health', Component: Health },
    { name: 'Chess', Component: Chess },
    { name: 'TicTacToe', Component: TicTacToe }
]

export default class ProjectSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inIndex: 0
        }
    }

    previousSlide = () => {
        this.setState({
            inIndex: this.state.inIndex === 0 ? switchComponents.length - 1 : this.state.inIndex - 1
        })
    }

    nextSlide = () => {
        this.setState({
            inIndex: this.state.inIndex === switchComponents.length - 1 ? 0 : this.state.inIndex + 1
        })
    }

    render() {
        return (
            <div className='proj-slide-wrap'>
                <SliderBtn 
                sliderBtnTxt={'〈'}
                slideBtnFunction={this.previousSlide}
                />
                    {switchComponents.map(({ Component }, key) => (
                        <CSSTransition
                        key={key}
                        in={key === this.state.inIndex}
                        timeout={300}
                        exit={false}
                        unmountOnExit
                        >
                            <Component />
                        </CSSTransition>
                    ))}
                <SliderBtn 
                sliderBtnTxt={'〉'}
                slideBtnFunction={this.nextSlide}
                />
            </div>
        )
    }
}
