import React from 'react';
import Slider from 'react-slick'

import slide_1 from '../../resources/images/slide_1.png'
import slide_2 from '../../resources/images/slide_2.jpg'
import slide_three from '../../resources/images/slide_three.jpg'

const Carrousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return ( <div className='carrousel_wrapper' style={{overflow:'hidden', height: `${window.innerHeight}px`}}>
        <Slider {...settings}>
            <div>
                <div className='carrousel_image' style={{background: `url(${slide_1})`, height: `${window.innerHeight}px`}}>

                </div>
            </div>
            <div>
                <div className='carrousel_image' style={{background: `url(${slide_2})`, height: `${window.innerHeight}px`}}>

                </div>
            </div>
            <div>
                <div className='carrousel_image' style={{background: `url(${slide_three})`, height: `${window.innerHeight}px`}}>

                </div>
            </div>
        </Slider>

    </div> );
}
 
export default Carrousel;