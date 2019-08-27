import React, { Component } from 'react'
import Health from '../Health'
import './ProjectSlider.css'

export default class ProjectSlider extends Component {
    render() {
        return (
            <div className='proj-slide-wrap'>
                <button>&lang;</button>
                <div>
                    <Health />
                </div>
                <button>&rang;</button>

                
            </div>
        )
    }
}
