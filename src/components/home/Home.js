import React, { Component } from 'react'
import ClearlyMyName from './ClearlyMyName'
import Resume from './Resume'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div id='Home' className='jmp-pnt'>
                <ClearlyMyName />
                <Resume />
            </div>
        )
    }
}
