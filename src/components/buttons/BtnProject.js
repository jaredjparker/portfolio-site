import React, { Component } from 'react'
import './BtnProject.css'

export default class BtnProject extends Component {
    render() {
        return (
            <div>
                <a href={this.props.linkToApp}><button className='to-project-btn'>{this.props.projectLinkBtnTxt}</button></a>
            </div>
        )
    }
}
