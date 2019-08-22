import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu'

// Styles
import './Navbar.scss'

// Components
import Home from '../Home/Home'
import Services from '../Services/Services'
import Tarif from '../Tarif/Tarif'
import Team from '../Team/Team'
import GalleryDog from '../GalleryDog/GalleryDog'
import Contact from '../Contact/Contact'
import Hours from '../Hours/Hours'


export default class NavbarSmall extends Component {
    render() {
        return (
            <Router>
                <nav className='nav-small'>
                    <Menu transition='elastic'>
                        <h1 id='active'><Link to='/' >Art & Dogs</Link></h1>
                        <ul>
                            <li> <Link to='/services' >  Nos services </Link> </li>
                            <li> <Link to='/tarif' > Tarif </Link> </li>
                            <li> <Link to='/team' > L'équipe </Link> </li>
                            <li> <Link to='/Gallery' > Galerie </Link> </li>
                            <li> <Link to='/contact' > Contact </Link> </li>
                            <li> <Link to='/hours' > Nos heures </Link> </li>
                        </ul>
                    </Menu>
                </nav>
                <Route exact path='/' component={ Home } />
                <Route exact path='/services' component={ Services } />
                <Route exact path='/tarif' component={ Tarif } />
                <Route exact path='/team' component={ Team } />
                <Route path='/Gallery' component={ GalleryDog } />
                <Route path='/contact' component={ Contact } />
                <Route exact path='/hours' component={ Hours } />
            </Router>
        );
    }
}
