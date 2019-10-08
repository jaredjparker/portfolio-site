import React from 'react'
import ProjectText from './projectComps/ProjectText'
import ProjectImage from './projectComps/ProjectImage'
import './TicTacToe.css'
import tictactoeImage from '../../assets/tictactoe-project-image.jpg'

export default function TicTacToe() {

    let tictactoeListItemArr = ['Built for a presentation.', 'Help users learn React.js.', 'Player turns are maintained.', 'Validates upon win or draw.', 'Illegal moves cannot be made.']

    return (
        <div className='specific-project-wrapper'>
            <ProjectImage 
            imagePassByComp={tictactoeImage}
            hrefFromComp={'http://tictactoe.logixexpert.com/'}
            altTextPassByComp={'Screenshot of Tic-Tac-Toe App'} />
            <ProjectText 
            projectTextH2={'Tic-Tac-Toe'}
            projectTextDescription={'Tech Used: React.js'}
            projectTextListItems={tictactoeListItemArr}
            compPassLinkToApp={'http://tictactoe.logixexpert.com/'}
            compPassTextToApp={'Play Tic-Tac-Toe!'}
            />
        </div>
    )
}
