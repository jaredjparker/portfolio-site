import React, { Component } from 'react'
import ProjectText from './projectComps/ProjectText'
import ProjectImage from './projectComps/ProjectImage'
import './Chess.css'
import chessImage from '../../assets/chess-project-image.PNG'

export default class Chess extends Component {

    chessListItemArr = ['Built from create-react-app up.', 'Pieces can be moved around the board.', 'Player turns are maintained.', 'Pieces can be replaced without the player turn switching.']

    render() {
        return (
            <div className='specific-project-wrapper'>
                <ProjectImage 
                imagePassByComp={chessImage}
                altTextPassByComp={'Screenshot of Chess CRA App'} />
                <ProjectText 
                projectTextH2={'Simple Chess'}
                projectTextDescription={'Tech Used: React.js and that is it'}
                projectTextListItems={this.chessListItemArr}
                compPassLinkToApp={'http://chess.logixexpert.com/#/'}
                compPassTextToApp={'Go To The Chess App!'}
                 />
            </div>
        )
    }
}
