import React, { Component } from 'react'
import ClearlyMyName from './ClearlyMyName'
import Resume from './Resume'

export default class Home extends Component {
    render() {
        return (
            <div id='Home'>
                <ClearlyMyName />
                <Resume />
            </div>
        )
    }
}
