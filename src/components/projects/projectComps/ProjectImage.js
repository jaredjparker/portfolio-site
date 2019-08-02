import React, { Component } from 'react'
import './ProjectImage.css'

export default class ProjectImage extends Component {
    render() {
        return (
            <div className='project-image-wrapper'>
                <a href={this.props.hrefFromComp}>
                    <img src={this.props.imagePassByComp} alt={this.props.altTextPassByComp} />
                </a>
            </div>
        )
    }
}
