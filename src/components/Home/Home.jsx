import React, {Component, Fragment} from 'react';

// Styles
import './Home.scss'

// Pictures
import waterColor from '../../assets/img/watercolor.png'
import homeDog from '../../assets/img/homeDog.jpg'
import {Link} from "react-router-dom";


export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <img className='watercolor' src={waterColor} alt="watercolor background" />
                <img className='homeDog' src={homeDog} alt="homeDog background" />

                <header className='home'>
                    <h2>Art & Dogs</h2>
                    <h3>Toilettage Canin</h3>
                    <p>Du plus petit au plus grand</p>
                    <button><Link to='/contact' >Prendre un rendez-vous</Link></button>
                </header>
            </Fragment>
        );
    }
}

