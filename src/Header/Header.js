import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import PropTypes from 'prop-types'

class Header extends Component {
    constructor({ resetType }) {
        super()
        this.state = {
            resetType: resetType
        }
    }

    render() {
        return (
            <div className='header-wrapper'>
                <div className='title-wrapper'>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                        <h1 onClick={this.state.resetType} className='title'>Grant X Beard</h1>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header

Header.propTypes = {
    resetType: PropTypes.func
  };