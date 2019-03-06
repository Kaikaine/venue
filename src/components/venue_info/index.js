import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'

import Zoom from 'react-reveal/Zoom'

const VenueInfo = () => {
    return ( 
    <div className='bck_black'>
        <div className="center_wrapper">
            <div className="vn_wrapper">

            <Zoom durcation={500}>
            <div className='vn_item'>
                <div className="vn_outer">
                    <div className="vn_inner">
                        <div className="vn_icon_square bck_red"> </div>
                        <div className="vn_icon" style={{background: `url(${icon_calendar})`}}></div>
                    </div>
                    <div className="vn_title">Event Date & Time</div>
                    <div className="vn_desc">18 March 2019 @8:00pm</div>
                </div>
            </div>

            <div className='vn_item'>
                <div className="vn_outer">
                    <div className="vn_inner">
                        <div className="vn_icon_square bck_yellow"> </div>
                        <div className="vn_icon" style={{background: `url(${icon_location})`}}></div>
                    </div>
                    <div className="vn_title">Event Locaion</div>
                    <div className="vn_desc">Albany, NY - Times Union Square</div>
                </div>
            </div>
            </Zoom>

            
            
            </div>
        </div>
    </div> );
}
 
export default VenueInfo;