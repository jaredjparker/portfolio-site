import React from 'react'
import './ContentCarrier.css'

export default function ContentCarrier(props) {
    return (
        <div 
        id={props.compTitleID}
        className={props.compSectClass}>
            {props.compPassedInFromApp}
        </div>
    )
}
