import React from 'react'
import { Link } from 'react-router-dom'
import './Bio.css'

const Bio = () => {

    return (
        <div className='bio-wrapper'>
            <div className='bio-box'>
            <img className='portrait' src='https://i.ibb.co/Y83Vcjy/IMG-3311.jpg'/>
            <section className='copy'>
                <Link to={'/'} style={{textDecoration: 'none'}}>
            <p className='red'>X</p>
            </Link>
            </section>
            </div>
        </div>
    )
}

export default Bio