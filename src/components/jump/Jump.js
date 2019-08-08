import React, { Component } from 'react'
import Anchor from './Anchor'
import MixBtn from '../mixer/MixBtn'
import IconBtn from '../buttons/IconBtn'
import LightLinkedIn from '../../assets/lght_linkedIn.png'
import LightGitHub from '../../assets/lightGithub.png'
import './Jump.css'

export default class Jump extends Component {
    

    render() {
        return (
            <div className='jump-menu-wrapper'>
                <div className='jump-menu-item'>
                    <Anchor jumpAnchorTagsArr={this.props.appAnchorTagsArr} />
                    <MixBtn
                    compArrFromJump={this.props.compArrFromApp}
                    mixDivFun={this.props.appMixDivFun}
                     />
                    <div className='info-top'>
                        <span >jared.parker7890@gmail.com</span>
                        <span >(801) 205 4267</span>
                        <IconBtn
                        linkPassedFromComponent={'https://www.linkedin.com/in/jared-jones-parker/'}
                        imagePassedFromComponent={LightLinkedIn}
                        altTextFromComponent={'White LinkedIn Symbol'}
                        />
                        <IconBtn
                        linkPassedFromComponent={'https://github.com/VIISilver'}
                        imagePassedFromComponent={LightGitHub}
                        altTextFromComponent={'White Github Symbol'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
