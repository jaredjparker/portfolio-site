import React, { Component } from 'react'
import './TextAbout.css'

export default class TextAbout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='text-about-wrapper'>
                <div className="about-text">
                    <h1>About Me</h1>
                    <div>
                        <p>While pursuing a degree in Accounting, I completed courses in Management Information Systems and Accounting Information Systems, where I was introduced to SQL, R, and Python. This sparked my interest in programming and led me to further my education in web development. I completed a web development program at DevMountain. At DevMountain I gained expertise in HTML, CSS, JavaScript, React, Node.js, and Postgres. This foundational training equipped me with the skills needed for front-end and back-end development, including creating scalable applications and integrating with various technologies.</p>
                    </div>
                </div>
            </div>
        )
    }
}
