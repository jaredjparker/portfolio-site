import React, { Component } from 'react'
// import Overview from './Overview'
import Contractor from './Contractor'
import Impartner from './Impartner'
import FEDImpartner from './FEDImpartner'
import './Experience.css'

export default class Experience extends Component {
    render() {
        return (
            <div className='section-wrap experience-wrap'>
                <h1>Experience</h1>
                <FEDImpartner />
                <Impartner />
                <Contractor />
                {/* <Overview /> */}
            </div>
        )
    }
}
