import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div className='header-wrapper'>
            <div className='title-wrapper'>
            <h1 className='title'>Grant X Beard</h1>
            </div>
            </div>
        )
    }
}

export default Header