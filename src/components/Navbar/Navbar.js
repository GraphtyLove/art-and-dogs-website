import React, {Component} from 'react';
import './Navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <h1 id='active'><a href="#">Art & Dogs</a></h1>
                <ul>
                    <li><a href="#"> Nos services </a></li>
                    <li><a href="#"> Tarif </a></li>
                    <li><a href="#"> L'équipe </a></li>
                    <li><a href="#"> Galerie </a></li>
                    <li><a href="#"> Contact </a></li>
                    <li><a href="#"> Nos heures </a></li>
                </ul>
            </nav>
        );
    }
}
