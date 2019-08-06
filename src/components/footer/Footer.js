import React, { Component } from 'react'
import IconBtn from '../buttons/IconBtn'
import './Footer.css'
import DarkLinkedIn from '../../assets/drk_linkedin.png'
import DarkGitHub from '../../assets/drk_github.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='foot-wrap'>
                <p>jared.parker7890@gmail.com</p>
                <div className='info-top'>
                    <IconBtn
                    linkPassedFromComponent={'https://www.linkedin.com/in/jared-jones-parker/'}
                    imagePassedFromComponent={DarkLinkedIn}
                    altTextFromComponent={'White LinkedIn Symbol'}
                    />
                    <IconBtn
                    linkPassedFromComponent={'https://github.com/VIISilver'}
                    imagePassedFromComponent={DarkGitHub}
                    altTextFromComponent={'White Github Symbol'}
                    />
                </div>
                <p>&copy;2019 by Jared Parker</p>
            </div>
        )
    }
}
