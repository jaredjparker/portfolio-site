import React, { Component } from 'react'
import './Jump.css'

export default class Jump extends Component {
    render() {
        return (
            <div className='jump-menu-wrapper'>
                <div className='jump-menu-item'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Projects</a>
                    <a>Experience</a>
                    <a>Contact</a>
                </div>

            </div>
        )
    }
}
