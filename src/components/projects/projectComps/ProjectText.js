import React, { Component } from 'react'
import BtnProject from '../../buttons/BtnProject'
import './ProjectText.css'

export default class ProjectText extends Component {
    render() {
        return (
            <div className='project-txt-wrapper'>
                <h2>{this.props.projectTextH2}</h2>
                <p>{this.props.projectTextDescription}</p>
                <ul>
                    {this.props.projectTextListItems.map((item, key) => (
                        <li
                        key={key}>
                            {item}
                        </li>
                    ))}
                </ul>
                <BtnProject linkToApp={this.props.compPassLinkToApp} projectLinkBtnTxt={this.props.compPassTextToApp} />
            </div>
        )
    }
}
