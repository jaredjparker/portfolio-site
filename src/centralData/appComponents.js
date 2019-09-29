import React from 'react'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import Experience from '../components/experience/Experience'
import Contact from '../components/contact/Contact'

const componentsArr = [{ name: 'Home', Component: <Home /> }, { name: 'About', Component: <About /> }, { name: 'Projects', Component: <Projects /> }, { name: 'Experience', Component: <Experience /> }, { name: 'Contact', Component: <Contact /> }]

export default componentsArr