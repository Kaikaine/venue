import React from 'react'
import Button from '@material-ui/core/Button'

import TicketIcon from '../../resources/images/icons/ticket.png'

const UButton = (props) => {
    return ( 
        <Button
        href={props.link}
        variant='contained'
        size='small'
        style={{
            background: props.bck,
            color: props.color
        }}
        >
            <img 
            src={TicketIcon} 
            alt="Ticket"
            className='iconImage'
            />
            Button
        </Button>
     );
}
 
export default UButton;