import React, { Component } from 'react'
import Portrait from './Portrait'
import TextAbout from './TextAbout'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className='about-comp-wrapper'>
                <Portrait />
                <TextAbout />
            </div>
        )
    }
}
