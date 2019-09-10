import React, { Component } from 'react'
import Health from '../Health'
import SliderBtn from './SliderBtn'
import './ProjectSlider.css'

export default class ProjectSlider extends Component {
    render() {
        return (
            <div className='proj-slide-wrap'>
                <SliderBtn sliderBtnTxt={'〈'} />
                <div>
                    <Health />
                </div>
                <SliderBtn sliderBtnTxt={'〉'} />
            </div>
        )
    }
}
