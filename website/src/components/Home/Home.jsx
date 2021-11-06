import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";

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
                    <p>
                        Pour des raisons de santé, le salon de <strong>marcinelle est définitevement fermé</strong>. 
                        Nous accueillons toujours les <strong>petits chiens</strong> à <Link to='/contact'>notre nouvelle adresse</Link>. 
                        Pour prendre rendez-vous: <a href="tel:+32455128282">0455 12 82 82</a>
                    </p>
                    <button><Link className="appointment-button" to='/contact'>Prendre un rendez-vous</Link></button>
                </header>
            </Fragment>
        );
    }
}

