import React, { Component } from 'react'
import './ContactText.css'

export default class ContactText extends Component {
    render() {
        return (
            <div className='contact-text-wrapper'>
                <h1>Contact</h1>
                <p>Thank you for visiting my Portfolio Site.</p>
                <ul>
                    <li>Check out more of my work on <a href='https://github.com/VIISilver'>Github</a></li>
                    <li>Take a look at my professional profile on <a href='https://www.linkedin.com/in/jared-jones-parker/'>LinkedIn</a></li>
                    <li>Or email me at <a href='mailto:jared.parker7890@gmail.com'>jared.parker7890@gmail.com</a></li>
                </ul>
            </div>
        )
    }
}
