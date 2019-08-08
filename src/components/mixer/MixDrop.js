import React, { Component } from 'react'
import './MixDrop.css'

export default class MixDrop extends Component {
    render() {
        return (
            <div 
            className='mixdrop-wrap'
            style={this.props.dropBool ? {display: 'block'} : {display: 'none'}}>
                {this.props.compArrFromBtn.map((item, key) => (
                    <p
                    key={key}
                    onClick={this.props.passMixDivFun}
                    >{item.type.name}</p>
                ))}
                <button 
                onClick={this.props.resetFromBtn}
                >Reset</button>
            </div>
        )
    }
}
