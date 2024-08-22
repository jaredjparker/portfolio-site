import React, { Component } from 'react'
import './Experience.css'

export default class Experience extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         error: null,
    //         isLoaded: false,
    //         experiences: []
    //     };
    // }

    // componentDidMount() {
    //     fetch("http://localhost:8080/api/experiences")
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     experiences: result
    //                 });
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }
    render() {
        return (
            <div className='section-wrap experience-wrap'>
                <h1>Experience</h1>
                {/* {this.state.experiences.map(experience =>
                    <div key={experience.experienceid} className='experience-basic'>
                        <h2>{experience.companyname}</h2>
                        <p>{experience.position}</p>
                        <p>{experience.daterangeofemployment}</p>
                        <ul>
                            <li>{experience.positiondescription}</li>
                        </ul>
                    </div>
                )} */}
                <div className='experience-basic'>
                    <h2>Impartner, Inc. - <i>Software Engineer</i></h2>
                    <p>June 2021 - Present</p>
                    <br />
                    <p>Develop custom features for customer portals, focusing on scalable and high-performance solutions using .NET, Knockout.js, jQuery, Sass, and JavaScript. My responsibilities include designing and building tailored applications that meet client needs and enhance user experiences. I also contribute to the core product development, applying Angular, .NET, and Sass to support and improve our software solutions. This experience has honed my skills in software design, coding, and debugging within an Agile environment.</p>
                </div>
                <div className='experience-basic'>
                    <h2>Pictureline, Inc. - <i>Software Developer</i></h2>
                    <p>June 2020 - June 2021</p>
                    <br />
                    <p>At Pictureline, I developed and maintained Shopify web applications and custom business solutions, utilizing Express and Node.js for backend development and AWS for deployment. I also enhanced the eCommerce website by integrating Web Components, HTML, Sass, JavaScript, and the Liquid Template Language. This role required strong UI/UX design skills and a thorough understanding of web services and version control systems.</p>
                </div>
                <div className='experience-basic'>
                    <h2>Impartner, Inc. - <i>Software Developer</i></h2>
                    <p>February 2018 - June 2020</p>
                    <br />
                    <p>Initially joining as a contractor, I transitioned to a full-time Software Developer, where I built custom features for customer websites and managed integrations and frontend customizations. Using technologies such as Knockout.js, .NET, Sass, and JavaScript, I delivered high-quality solutions and collaborated with cross-functional teams. This role developed my ability to work with diverse technologies and adhere to coding standards, preparing me for more complex software development tasks.</p>
                </div>
            </div>
        )
    }
}
