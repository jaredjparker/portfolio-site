import React, { Component } from 'react'
import componentsArr from '../../centralData/appComponents'
import './MixDrop.css'

export default class MixDrop extends Component {
    render() {
        return (
            <div 
            className='mixdrop-wrap'
            style={this.props.dropBool ? {display: 'block'} : {display: 'none'}}>
                {componentsArr.map((item, key) => (
                    <p
                    key={key}
                    >{item.type.name}</p>
                ))}
                <button 
                onClick={this.props.dropActive}
                >Done</button>
            </div>
        )
    }
}
