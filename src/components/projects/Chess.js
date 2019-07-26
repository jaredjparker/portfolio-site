import React, { Component } from 'react'
import './Chess.css'
import chessImage from '../../assets/chess-project-image.PNG'

export default class Chess extends Component {
    render() {
        return (
            <div className='chess-wrapper'>
                <div>
                    <img src={chessImage} alt='Screenshot of Chess CRA App'/>
                </div>
                <div>
                    <h2>Simple Chess</h2>
                </div>
            </div>
        )
    }
}
