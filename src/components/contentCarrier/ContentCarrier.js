import React, { Component } from 'react'
import './ContentCarrier.css'

export default class ContentCarrier extends Component {
    render() {
        return (
            <div id={this.props.compTitleID} className='jmp-pnt'>
                {this.props.compPassedInFromApp}
            </div>
        )
    }
}
