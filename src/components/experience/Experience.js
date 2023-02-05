import React, { Component } from 'react'
// import Overview from './Overview'
import './Experience.css'

export default class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            experiences: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/experiences")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        experiences: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <div className='section-wrap experience-wrap'>
                <h1>Experience</h1>
                {this.state.experiences.map(experience =>
                    <div key={experience.experienceid} className='experience-basic'>
                        <h2>{experience.companyname}</h2>
                        <p>{experience.position}</p>
                        <p>{experience.daterangeofemployment}</p>
                        <ul>
                            <li>{experience.positiondescription}</li>
                        </ul>
                    </div>
                )}
                {/* <Overview /> */}
            </div>
        )
    }
}
