import React, { Component } from 'react'
import SquareProfessional from '../../assets/square-professional-headshot.jpg'
import './Portrait.css'

export default class Portrait extends Component {
    render() {
        return (
            <div className='portrait-wrapper'>
                <img src={SquareProfessional} alt='Professional Headshot of Jared Parker' />
            </div>
        )
    }
}
