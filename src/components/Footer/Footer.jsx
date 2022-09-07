import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade triggerOnce delay={500}>
                <div>
                    <div className='font_righteous header_logo_venue'>The venue</div>
                    <div className='footer_copyright'>The Venue 2022 All rights reserved®</div>
                </div>
            </Fade>

        </footer>
    )
}

export default Footer