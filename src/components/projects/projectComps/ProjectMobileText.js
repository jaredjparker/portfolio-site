import React from 'react'
import ProjectText from './ProjectText'
import './ProjectMobileText.css'

export default function ProjectMobileText() {

    let healthListItemArr = ['Contact page uses Nodmailer.', 'Majority of the components utilize Material-UI.', 'Styling is optimized for modile view.']
    
    let chessListItemArr = ['Pieces can be moved around the board.', 'Player turns are maintained.', 'Pieces can be replaced without the player turn switching.']
    
    let trippinListItemArr = ['This application was built to make travel information easier to enter, organize, and access.', 'Worked on a team of 4 members to develop this application.', 'Personally worked on the database schema, backend logic, and some frontend development', 'Travefy.com is a good website to compare to this application.']

    let tictactoeListItemArr = ['Built for a presentation.', 'Help users learn React.js.', 'Player turns are maintained.', 'Validates upon win or draw.', 'Illegal moves cannot be made.']

    return (
        <div className='proj-txt-mobile-wrap'>
            <ProjectText
            projectTextH2={'Randi Wolsey Health and Fitness Coach'}
            projectTextDescription={'Tech Used: React.js, NodeMailer, and Material-UI'}
            projectTextListItems={healthListItemArr}
            compPassLinkToApp={'http://randiwolsey.logixexpert.com/#/'}
            compPassTextToApp={'Check Out Randi\'s Website!'}
            />
            <ProjectText 
            projectTextH2={'Simple Chess'}
            projectTextDescription={'Tech Used: React.js'}
            projectTextListItems={chessListItemArr}
            compPassLinkToApp={'http://chess.logixexpert.com/#/'}
            compPassTextToApp={'Go To Simple Chess!'}
            />
            <ProjectText 
            projectTextH2={'Trippin\' Travel App'}
            projectTextDescription={'Tech Used: React.js, NodeJS, Material-UI, Sass, and Massive'}
            projectTextListItems={trippinListItemArr}
            compPassLinkToApp={'http://trippinonline.com/#/'}
            compPassTextToApp={'Visit the Trippin\' App!'}
            />
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
