import React, { Component } from 'react'
import Chess from './Chess'
import './Projects.css'

export default class Projects extends Component {
    render() {
        return (
            <div id='Projects'>
                <h1>Projects</h1>
                <Chess />
            </div>
        )
    }
}
