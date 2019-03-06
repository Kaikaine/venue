import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import UButton from '../utils/UButton'

class Discount extends Component {
    state = { 
        discountStart: 0,
        discountEnd: 30
     }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({discountStart: this.state.discountStart +1})
        } 
    }

    componentDidUpdate(prevProps, prevState) {
        setTimeout(() => {
            this.percentage()
        }, 30)
    }
    
    render() { 
        return ( 
        <div className='center_wrapper'>
            <div className="discount_wrapper">

            <Fade
            onReveal={() => this.percentage()}
            >
            <div className='discount_porcentage'>
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
            </Fade>
                
            <Slide right>
                <div className='discount_description'>
                    <h3>Purchase tickets before FEB 2nd</h3>
                    <p>Duis quis felis non turpis porttitor rhoncus. Nunc non dapibus risus. Ut risus dui, pellentesque at nunc vitae, porta posuere leo. Aliquam ut felis non nulla pulvinar lobortis id sit amet massa. Integer nec ipsum placerat, ullamcorper odio nec, vulputate risus.</p>
                    <UButton 
                    text='Purchase tickets'
                    bck='#ffa800'
                    color='#fff'
                    link='google.com'
                    />
                </div>
                
            </Slide>
                

                
            </div>
        </div> );
    }
}
 
export default Discount;