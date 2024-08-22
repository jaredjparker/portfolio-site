import React, { Component } from 'react'
import ProjectText from './projectComps/ProjectText'
import ProjectImage from './projectComps/ProjectImage'
import './Chess.css'
import chessImage from '../../assets/chess-project-image.jpg'

export default class Chess extends Component {

    chessListItemArr = ['Pieces can be moved around the board.', 'Player turns are maintained.', 'Pieces can be replaced without the player turn switching.']

    render() {
        return (
            <div className='specific-project-wrapper'>
                <ProjectText 
                projectTextH2={'Chess'}
                projectTextDescription={'Tech Used: React.js'}
                projectTextListItems={this.chessListItemArr}
                compPassLinkToApp={'https://chess.logixexpert.com/#/'}
                compPassTextToApp={'Go To Chess'}
                />
                <ProjectImage 
                imagePassByComp={chessImage}
                hrefFromComp={'https://chess.logixexpert.com/#/'}
                altTextPassByComp={'Screenshot of Chess CRA App'}
                heightSetter={true} />
            </div>
        )
    }
}
