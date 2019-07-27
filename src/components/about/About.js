import React, { Component } from 'react'
import Portrait from './Portrait'
import TextAbout from './TextAbout'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div id='About' className='jmp-pnt'>
                <Portrait />
                <TextAbout />
            </div>
        )
    }
}
