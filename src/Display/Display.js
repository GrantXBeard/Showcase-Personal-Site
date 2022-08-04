import React, { Component } from 'react'
import './Display.css'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            work: null,
            isLoading: false,
            error: '',
        }
    }

    render() {
        return (
            <div className='display'>
            <section className='item-container'>

            <h2>DISPLAY</h2>
            </section>
            </div>
        )
    }
}

export default Display