import React, { Component } from 'react'
import './Chess.css'
import chessImage from '../../assets/chess-project-image.PNG'

export default class Chess extends Component {
    render() {
        return (
            <div className='chess-wrapper'>
                <img src={chessImage} />
            </div>
        )
    }
}
