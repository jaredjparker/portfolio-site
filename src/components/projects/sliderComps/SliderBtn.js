import React, { Fragment } from 'react'
import './SliderBtn.css'

export default function SliderBtn(props) {
    return (
        <Fragment>
            <button 
            className='slide-btn'
            onClick={props.slideBtnFunction}>
            {props.sliderBtnTxt}</button>
        </Fragment>
    )
}
