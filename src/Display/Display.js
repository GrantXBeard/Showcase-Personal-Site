import React, { Component } from 'react'
import Image from '../Image/Image'
import './Display.css'
import PropTypes from 'prop-types'

class Display extends Component {
    constructor({ type }) {
        super()
        this.state = {
            work: null,
            isLoading: false,
            error: '',
            type: type,
        }
    }

    componentDidMount = () => {
        this.getData()
    }
    
    getData = () => {
        this.setState({ isLoading: true })
        fetch(`http://localhost:3000/api/v1/work`)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                console.log("Error")
            }
        })
        .then(data => {
            let work = this.getType(data.work)
            this.setState({
                work: work,
                isLoading: false,
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
            console.log("Error")
        })
    }

    getType = (work) => {
       if (this.state.type === 'all') {
        return this.buildImageArray(work)
       } else {
        let medium =  work.filter(img => img.type === this.state.type)
        return this.buildImageArray(medium)
    }
    }

    buildImageArray = (array) => {
        return array.map(img => {
            return (
                <Image
                    path={img.img}
                    id={img.id}
                    key={img.id}
                    description={img.description}
                    type={img.type}
                />
            )
       })
    }

    render() {
        return (
            <div className='display'>
                <section className='item-container'>
                    {this.state.isLoading && <p className="loading">Loading...</p>}
                    {this.state.error && <h2>{this.state.error}</h2>}
                    {this.state.work && this.state.work}
                </section>
            </div>
        )
    }
}

export default Display

Display.propTypes = {
    type: PropTypes.string
  };
  