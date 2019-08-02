import React, { Component } from 'react'
import './ContentCarrier.css'

export default class ContentCarrier extends Component {
    render() {
        return (
            <div id={this.props.compTitleID} className={this.key == 0 ? 'jmp-pnt top-comp-space' : 'jmp-pnt'}>
                {this.props.compPassedInFromApp}
            </div>
        )
    }
}
