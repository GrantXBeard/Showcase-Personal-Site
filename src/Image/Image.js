import React, { Component } from 'react'
import './Image.css'

class Image extends Component {
    constructor({id, path, description }) {
        super()
        this.state = {
            id: id,
            path: path,
            description: description,
            show: false,
        }
    }

    changeShow = () => {
        if (!this.state.show){
            this.setState({show: true})
        } else {
            this.setState({show: false})
        }
    }

    render() {
        return (
            <>
                {this.state.show && <p className='description'>{this.state.description} <span onClick={this.changeShow} className='red'>X</span></p>}
                <img onClick={this.changeShow} className='image' src={this.state.path} id={this.state.id} />
            </>
        )
    }
}

export default Image
