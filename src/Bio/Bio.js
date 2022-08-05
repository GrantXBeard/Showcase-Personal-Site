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
            <pre><p>     Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>
                 elit. Nunc id pulvinar massa, ut vulputate nulla. Duis<br></br> 
                 eu eleifend enim, sed euismod eros. Suspendisse nec<br></br>
                 ultrices orci, in efficitur ex. Mauris et est mauris.<br></br>
                 Phasellus vel fringilla elit, nec ultrices dolor.<br></br>
                 Curabitur vehicula dolor eget pellentesque vulputate,<br></br>
                 quam quam dictum massa, eu porta lectus leo eu risus.<br></br>
                 Aliquam tincidunt magna pharetra nisi vehicula, a<br></br>
                 egestas velit accumsan. Quisque non mauris ipsum. Donec<br></br>
                 tincidunt convallis elit, quis luctus erat. Fusce ut<br></br>
                 magna sed nunc feugiat tincidunt.</p></pre>
            </Link>
            <a href='https://www.instagram.com/grantxbeard/'>
            <img className='insta-logo' src='https://i.ibb.co/YkVmf9V/instagram-icon-white-on-black-circle.jpg'/>
            </a>
            </section>
            </div>
        </div>
    )
}

export default Bio