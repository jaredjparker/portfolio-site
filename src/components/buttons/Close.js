import React, { Component } from 'react'
import './Close.css'

export default class Close extends Component {
    render() {
        return (
            <div className='close-wrap'>
                <button
                onClick={this.props.closeFromDrop}
                >X</button>
            </div>
        )
    }
}
