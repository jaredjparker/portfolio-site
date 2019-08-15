import React, { Component } from 'react'
import './TextAbout.css'

export default class TextAbout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generic: true
        }
    }

    handleClick = () => {
        this.setState({ generic: !this.state.generic})
    }

    render() {
        return (
            <div className='text-about-wrapper'>
                <div className="about-text">
                    <h1>About Me</h1>
                    <div style={this.state.generic ? {display: "block"} : {display: "none"}}>
                        <p>At Utah State University, I was required to take Big Data Analytics and Accounting Information Systems. During both of those courses I was introduced to computer programming.&nbsp; After completing those courses I pursued web development full-time at DevMountain for 3 months.</p>
                        <p>I am working in a position that is between front-end development and support, where I have enhanced my web development skills and my communication skills.&nbsp; I am very interested in any Front-end position working in React.js, Angular, or Vue.js.</p>
                    </div>
                    <div style={this.state.generic ? {display: "none"} : {display: "block"}}>
                        <p>It is challenging for me to write professionally without sounding totally robotic.&nbsp; So this is my attempt at providing concise professional experience while giving the reader a glimpse into my personality.</p>
                        <p>It has been a long journey leading to Web Development, a journey that started during my accounting course work at Utah State University.&nbsp; I enjoyed my accounting and finance courses, but was captivated by my Data Analytics and Accounting Information Systems courses.&nbsp; These courses introduced me to several programming languages (Python, R, and SQL) and left me wanting to dive further into computer science.&nbsp; After spending several months learning Python on my own it was apparent that I needed direction in my studies.</p>
                        <p>I spoke to several people about my interests and began looking into Coding Bootcamps.&nbsp; The Coding Bootcamps provided me with the ability to make a career out of computer programming at a reasonable price.&nbsp; After several months considering my options I made the choice to attend DevMountain and commit the time and resources to learn Web Development.</p>
                        <p>Eighteen months after graduating from DevMountain I am working in a position that is between front-end development and support, allowing me to sharpen both my web development skills as well as my communication skills.&nbsp; I am currently looking for a role allowing me more creative opportunity.&nbsp; If you are looking for someone to fill a Front-end position working in React or Angular I would be an excellent fit.</p>
                    </div>
                    <button className='bio-btn' onClick={this.handleClick}>{this.state.generic ? 'Click here to read a less generic Bio' : 'Switch back to the generic Bio'}</button>
                </div>
            </div>
        )
    }
}
