import React from 'react'
import ProjectText from './projectComps/ProjectText'
import ProjectImage from './projectComps/ProjectImage'
import './TicTacToe.css'
import chessImage from '../../assets/chess-project-image.PNG'

export default function TicTacToe() {

    let chessListItemArr = ['Built from create-react-app up.', 'Pieces can be moved around the board.', 'Player turns are maintained.', 'Pieces can be replaced without the player turn switching.']

    return (
        <div className='specific-project-wrapper'>
            <ProjectImage 
            imagePassByComp={chessImage}
            hrefFromComp={'http://chess.logixexpert.com/#/'}
            altTextPassByComp={'Screenshot of Chess CRA App'} />
            <ProjectText 
            projectTextH2={'Simple Chess'}
            projectTextDescription={'Tech Used: React.js'}
            projectTextListItems={chessListItemArr}
            compPassLinkToApp={'http://chess.logixexpert.com/#/'}
            compPassTextToApp={'Go To Simple Chess!'}
            />
        </div>
    )
}
