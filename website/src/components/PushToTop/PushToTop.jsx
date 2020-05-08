import React, {Component} from 'react';
import { animateScroll as scroll } from 'react-scroll'

// Styles
import './PushToTop.scss'

// Pictures
import arrow from '../../assets/img/push.png'

export default class PushToTop extends Component {
    render() {
        return (
            <div className='push-to-top flex-center'>
                <img onClick={scroll.scrollToTop} src={arrow} alt="flèche vers le haut" />
            </div>
        );
    }
}
