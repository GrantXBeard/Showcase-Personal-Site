import React, { Component } from 'react'
import './Image.css'

class Image extends Component {
    constructor({id, path, description }) {
        super()
        this.state = {
            id: id,
            path: path,
            description: description,
        }
    }

    render() {
        return (
            <img className='image' src={this.state.path} id={this.state.id} />
        )
    }
}

export default Image
