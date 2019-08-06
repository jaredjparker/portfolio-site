import React, { Component } from 'react'
import './IconBtn.css'

export default class IconBtn extends Component {
    render() {
        return (
            <div className='icon-btn'>
                <a href={this.props.linkPassedFromComponent}>
                    <img 
                    src={this.props.imagePassedFromComponent}
                    alt={this.props.altTextFromComponent} />
                </a>
            </div>
        )
    }
}
