import React, { Fragment } from 'react'
import './BtnProject.css'

export default function BtnProject(props) {
    return (
        <Fragment>
            <a className='to-project-btn' href={props.linkToApp}><button>{props.projectLinkBtnTxt}</button></a>
        </Fragment>
    )
}

