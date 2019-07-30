import React, { Component } from 'react'
import './ProjectImage.css'

export default class ProjectImage extends Component {
    render() {
        return (
            <div className='project-image-wrapper'>
                <img src={this.props.imagePassByComp} alt={this.props.altTextPassByComp} />
            </div>
        )
    }
}
