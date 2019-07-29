import React, { Component } from 'react'
import BtnProject from '../buttons/BtnProject'
import './Chess.css'
import chessImage from '../../assets/chess-project-image.PNG'

export default class Chess extends Component {
    render() {
        return (
            <div className='chess-wrapper'>
                <div>
                    <img src={chessImage} alt='Screenshot of Chess CRA App'/>
                </div>
                <div className='chess-project-txt'>
                    <h2>Simple Chess</h2>
                    <p>Tech Used: React.js and that is it</p>
                    <ul>
                        <li>Built from create-react-app up.</li>
                        <li>Pieces can be moved around the board.</li>
                        <li>Player turns are maintained.</li>
                        <li>Pieces can be replaced without the player turn switching.</li>
                    </ul>
                    <BtnProject linkToApp={'http://chess.logixexpert.com/#/'} projectLinkBtnTxt={'Go To The Chess App!'} />
                </div>
            </div>
        )
    }
}
