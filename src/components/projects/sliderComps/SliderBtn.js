import React, { Fragment } from 'react'
import './SliderBtn.css'

export default function SliderBtn(props) {
    return (
        <Fragment>
            <button className='slide-btn'>{props.sliderBtnTxt}</button>
        </Fragment>
    )
}
