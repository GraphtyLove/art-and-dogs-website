import React, {Component, Fragment} from 'react';

// Styles
import './Background.scss'

// Pictures
import waterColor from "../../assets/img/watercolor.png";
import homeDog from "../../assets/img/homeDog.jpg";

export default class Background extends Component {
    render() {
        return (
            <Fragment>
                <img id='waterColor' className='waterColor' src={waterColor} alt="watercolor background" />
                <img id='homeDog' className='homeDog' src={homeDog} alt="homeDog background" />
            </Fragment>
        );
    }
}
