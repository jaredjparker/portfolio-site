import React, { Component } from 'react'
import Overview from './Overview'
import './Experience.css'

export default class Experience extends Component {
    render() {
        return (
            <div className='section-wrap'>
                <h1>Experience</h1>
                <Overview />
            </div>
        )
    }
}
