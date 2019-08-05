import React, { Component } from 'react'
import ContactText from './ContactText'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper section-wrap'>
                <ContactText />
            </div>
        )
    }
}
