import React, { Component } from 'react'
import Chess from './Chess'
import Health from './Health'
import Trippin from './Trippin'
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div className='proj-comp-wrapper'>
                <h1>Projects</h1>
                <Chess />
                <Health />
                <Trippin />
            </div>
        )
    }
}
