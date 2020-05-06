import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
import AppointmentAdmin from '../AppointmentAdmin/AppointmentAdmin'
import DataPolicy from '../DataPolicy/DataPolicy'


export default class NavbarLarge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 'home'
        }
    }
    updateActivePage(clickedPage) {
        this.setState({
            activePage: clickedPage
        })
    }

    render() {
        return (
            <Router>
                <nav className='nav-large'>
                    <h1 id={this.state.activePage === 'home' && 'active'}><Link onClick={() => this.updateActivePage('home')} to='/'>Art & Dogs</Link></h1>
                    <ul>
                        <li id={this.state.activePage === 'services' && 'active'} > <Link onClick={() => this.updateActivePage('services')} to='/services' >  Nos services </Link> </li>
                        <li id={this.state.activePage === 'tarif' && 'active'} > <Link onClick={() => this.updateActivePage('tarif')} to='/tarif' > Tarif </Link> </li>
                        <li id={this.state.activePage === 'team' && 'active'} > <Link onClick={() => this.updateActivePage('team')} to='/team' > L'équipe </Link> </li>
                        <li id={this.state.activePage === 'gallery' && 'active'} > <Link onClick={() => this.updateActivePage('gallery')} to='/Gallery' > Galerie </Link> </li>
                        <li id={this.state.activePage === 'contact' && 'active'} > <Link onClick={() => this.updateActivePage('contact')} to='/contact' > Contact </Link> </li>
                        <li id={this.state.activePage === 'hours' && 'active'} > <Link onClick={() => this.updateActivePage('hours')} to='/hours' > Nos heures </Link> </li>
                        <li id={this.state.activePage === 'data-policy' && 'active'} > <Link onClick={() => this.updateActivePage('data-policy')} to='/data-policy' >Utilisation des donnèes</Link> </li>
                    </ul>
                </nav>
                <Route exact path='/' component={Home} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/tarif' component={Tarif} />
                <Route exact path='/team' component={Team} />
                <Route path='/Gallery' component={GalleryDog} />
                <Route path='/contact' component={Contact} />
                <Route exact path='/hours' component={Hours} />
                <Route exact path='/rdv-admin' component={AppointmentAdmin} />
                <Route exact path='/data-policy' component={DataPolicy} />
            </Router>
        );
    }
}
