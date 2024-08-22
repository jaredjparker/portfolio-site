import React, { Component } from 'react'
import ProjectText from './projectComps/ProjectText'
import ProjectImage from './projectComps/ProjectImage'
import './Health.css'
import healthAppImage from '../../assets/randi-project-image.jpg'

export default class Health extends Component {

    healthListItemArr = ['Contact page uses Nodmailer.', 'Majority of the components utilize Material-UI.', 'Styling is optimized for modile view.']

    render() {
        return (
            <div className='specific-project-wrapper'>
                <ProjectImage 
                imagePassByComp={healthAppImage}
                hrefFromComp={'http://randiwolsey.logixexpert.com/#/'}
                altTextPassByComp={'Screenshot of Randi Wolsey\'s Website'} />
                <ProjectText
                projectTextH2={'Randi Wolsey Health and Fitness Coach'}
                projectTextDescription={'Tech Used: React.js, NodeMailer, and Material-UI'}
                projectTextListItems={this.healthListItemArr}
                compPassLinkToApp={'http://randiwolsey.logixexpert.com/#/'}
                compPassTextToApp={'Go to Randi\'s Website'}
                />
            </div>
        )
    }
}
