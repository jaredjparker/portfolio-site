import React, { Component } from 'react'
import Chess from './Chess'
import Health from './Health'
import Trippin from './Trippin'
import ProjectSlider from './sliderComps/ProjectSlider'
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className='proj-comp-wrapper section-wrap'>
                <h1>Projects</h1>
                <ProjectSlider />
            </div>
        )
    }
}
