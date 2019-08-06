import React, { Component } from 'react'
import IconBtn from '../buttons/IconBtn'
import './Footer.css'
import LightLinkedIn from '../../assets/lght_linkedIn.png'
import LightGitHub from '../../assets/lightGithub.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='foot-wrap section-wrap'>
                <p>jared.parker7890@gmail.com</p>
                <div className='info-top'>
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
        )
    }
}
