import React from 'react';
import Fade from 'react-reveal/Fade'
const Footer = () => {
    return ( <div>
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">The Venue 2018 All Rights reserved</div>
            </Fade>
        </footer>
    </div> );
}
 
export default Footer;