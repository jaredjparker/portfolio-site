import React, { Component } from 'react'
import anchorTags from '../sharedData/jumpValues';
import './Anchor.css'

export default class Anchor extends Component {

    render() {
        return (
            <div className='anchorDiv'>
                {anchorTags.map((item, key) => (
                    <a 
                    key={key} 
                    href={`#${item}`}
                    >
                    {item}
                    </a>
                ))}
            </div>
        )
    }
}

