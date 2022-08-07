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
                    <p>     Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nunc id pulvinar massa, ut vulputate nulla. Duis 
                        eu eleifend enim, sed euismod eros. Suspendisse nec
                        ultrices orci, in efficitur ex. Mauris et est mauris.
                        Phasellus vel fringilla elit, nec ultrices dolor.
                        Curabitur vehicula dolor eget pellentesque vulputate,
                        quam quam dictum massa, eu porta lectus leo eu risus.
                        Aliquam tincidunt magna pharetra nisi vehicula, a
                        egestas velit accumsan. Quisque non mauris ipsum. Donec
                        tincidunt convallis elit, quis luctus erat. Fusce ut
                        magna sed nunc feugiat tincidunt.</p>
                    <a href='https://www.instagram.com/grantxbeard/'>
                        <img className='insta-logo' src='https://i.ibb.co/YkVmf9V/instagram-icon-white-on-black-circle.jpg'/>
                    </a>
                </section>
            </div>
        </div>
    )
}

export default Bio