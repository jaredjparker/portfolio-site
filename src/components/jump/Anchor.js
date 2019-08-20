import React, { Component } from 'react'
import './Anchor.css'

export default class Anchor extends Component {

    render() {
        return (
            <div className='anchorDiv'>
                {this.props.jumpAnchorTagsArr.map((item, key) => (
                    <a 
                    key={key} 
                    href={`#${item[0]}`}
                    >
                    {item[0]}
                    </a>
                ))}
            </div>
        )
    }
}

