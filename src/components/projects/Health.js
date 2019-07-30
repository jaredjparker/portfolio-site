import React, { Component } from 'react'
import ProjectText from './projectComps/ProjectText'
import ProjectImage from './projectComps/ProjectImage'
import './Health.css'
import healthAppImage from '../../assets/randi-project-image.PNG'

export default class Health extends Component {

    healthListItemArr = ['Built from create-react-app up.', 'Pieces can be moved around the board.', 'Player turns are maintained.', 'Pieces can be replaced without the player turn switching.']

    render() {
        return (
            <div className='specific-project-wrapper'>
                <ProjectText
                projectTextH2={'Randi Wolsey Health and Fitness Coach'}
                projectTextDescription={'Tech Used: React.js, NodeMailer, and Material-UI'}
                projectTextListItems={this.healthListItemArr}
                compPassLinkToApp={'http://randiwolsey.com/#/'}
                compPassTextToApp={'Go To Randi\'s Website!'}
                />
                <ProjectImage 
                imagePassByComp={healthAppImage}
                altTextPassByComp={'Screenshot of Randi Wolsey\'s Website'} />
            </div>
        )
    }
}
