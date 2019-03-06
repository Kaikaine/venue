import React from 'react';

const Location = () => {
    return ( 
    <div className='location_wrapper'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.6023152389353!2d-73.75712578457328!3d42.64859007916858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de0a23955e9771%3A0x6c5c715665f19384!2sTimes+Union+Center!5e0!3m2!1sen!2sus!4v1551894823386" width="100%" 
        height="500px" 
        frameBorder="0" 
        allowFullScreen>
        </iframe>

        <div className='location_tag'>
            <div>
                Location
            </div>
        </div>
    </div> );
}
 
export default Location;