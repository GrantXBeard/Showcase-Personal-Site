import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
            <Link to={'/'} style={{textDecoration: 'none'}}>
            <h1 className='title'>Grant X Beard</h1>
            </Link>
            </div>
            </div>
        )
    }
}

export default Header