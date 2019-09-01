import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

// Styles
import './Home.scss'
import Background from "../Background/Background";


export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Background />
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

