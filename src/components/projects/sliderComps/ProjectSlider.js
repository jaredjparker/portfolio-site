import React, { Component } from 'react'
import Health from '../Health'
import SliderBtn from './SliderBtn'
import { Transition } from 'react-transition-group'
import './ProjectSlider.css'

export default class ProjectSlider extends Component {
    render() {
        return (
            <div className='proj-slide-wrap'>
                <SliderBtn sliderBtnTxt={'〈'} />
                <Health />
                <SliderBtn sliderBtnTxt={'〉'} />
            </div>
        )
    }
}
