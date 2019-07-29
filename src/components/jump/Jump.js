import React, { Component } from 'react'
import Anchor from './Anchor'
import LightLinkedIn from '../../assets/lght_linkedIn.png'
import LightGitHub from '../../assets/lightGithub.png'
import './Jump.css'

export default class Jump extends Component {
    

    render() {
        return (
            <div className='jump-menu-wrapper'>
                <div className='jump-menu-item'>
                    <Anchor jumpAnchorTagsArr={this.props.appAnchorTagsArr} />
                    <div className='info-top'>
                        <span >jared.parker7890@gmail.com</span>
                        <span >(801) 205 4267</span>
                        <div>
                            <a href='https://www.linkedin.com/in/jared-jones-parker/'>
                                <img 
                                src={LightLinkedIn}
                                alt='White LinkedIn Symbol' />
                            </a>
                        </div>
                        <div>
                            <a href='https://github.com/VIISilver'>
                                <img 
                                src={LightGitHub}
                                alt='White Github Symbol' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
