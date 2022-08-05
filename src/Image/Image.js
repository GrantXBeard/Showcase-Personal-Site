import React, { Component } from 'react'
import './Image.css'
import { Link } from 'react-router-dom'

class Image extends Component {
    constructor({id, path, description, type }) {
        super()
        this.state = {
            id: id,
            path: path,
            description: description,
            type: type,
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
                
                {this.state.show && 
                <Link to={`/${this.state.type}`} style={{textDecoration: 'none'}}>
                <p className='description'>{this.state.description}  
                <span onClick={this.changeShow} className='red'> X</span></p>
                </Link>}
                <Link to={`/${this.state.type}/${this.state.id}`}>
                <img onClick={this.changeShow} className='image' src={this.state.path} id={this.state.id} />
                </Link>
            </>
        )
    }
}

export default Image
