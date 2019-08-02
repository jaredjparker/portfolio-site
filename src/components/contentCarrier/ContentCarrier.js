import React, { Component } from 'react'
import './ContentCarrier.css'

export default class ContentCarrier extends Component {
    render() {
        return (
            <div 
            id={this.props.compTitleID}
            key={this.props.compSectKey}
            className={this.props.compSectClass}>
                {this.props.compPassedInFromApp}
            </div>
        )
    }
}
