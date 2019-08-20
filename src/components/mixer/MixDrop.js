import React, { Component } from 'react'
import Close from '../buttons/Close'
import './MixDrop.css'

export default class MixDrop extends Component {
    render() {
        return (
            <div 
            className='mixdrop-wrap'
            style={this.props.dropBool ? {display: 'block'} : {display: 'none'}}>
                <Close
                closeFromDrop={this.props.closeFromBtn}
                 />
                {this.props.compArrFromBtn.map((item, key) => (
                    <p
                    key={key}
                    onClick={this.props.passMixDivFun}
                    >{item[0]}</p>
                ))}
                <button 
                onClick={this.props.resetFromBtn}
                >Reset</button>
            </div>
        )
    }
}
