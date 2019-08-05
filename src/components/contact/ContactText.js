import React, { Component } from 'react'
import './ContactText.css'

export default class ContactText extends Component {
    render() {
        return (
            <div>
                <p>Thank you for checking out my Portfolio Site. Here a few ways to contact me.</p>
                <ul>
                    <li>Check out more of my work on <a href='https://github.com/VIISilver'>Github</a></li>
                    <li>Take a look at my professional profile on <a href='https://www.linkedin.com/in/jared-jones-parker/'>LinkedIn</a></li>
                    <li>Or email me at <a href='mailto:jared.parker7890@gmail.com'>jared.parker7890@gmail.com</a></li>
                </ul>
            </div>
        )
    }
}
