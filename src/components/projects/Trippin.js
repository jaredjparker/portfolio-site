import React, { Component } from 'react'
import ProjectText from './projectComps/ProjectText'
import ProjectImage from './projectComps/ProjectImage'
import './Trippin.css'
import trippinAppImage from '../../assets/trippinScreenShot.png'

export default class Trippin extends Component {

    trippinListItemArr = ['This application was built to make travel information easier to enter, organize, and access.', 'Worked on a team of 4 members to develop this application.', 'Personally worked on the database schema, backend logic, and some frontend development']

    render() {
        return (
            <div className='specific-project-wrapper'>
                <ProjectText 
                projectTextH2={'Trippin\' Travel'}
                projectTextDescription={'Tech Used: React.js, NodeJS, Material-UI, and Sass'}
                projectTextListItems={this.trippinListItemArr}
                compPassLinkToApp={'http://trippinonline.com/#/'}
                compPassTextToApp={'Visit the Trippin\' App!'}
                />
                <ProjectImage 
                imagePassByComp={trippinAppImage}
                hrefFromComp={'http://trippinonline.com/#/'}
                altTextPassByComp={'Screenshot of Trippin Travel App'} />
            </div>
        )
    }
}
