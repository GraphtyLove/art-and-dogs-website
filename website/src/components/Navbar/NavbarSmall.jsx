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
import DataPolicy from '../DataPolicy/DataPolicy'


export default class NavbarSmall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            activePage: window.location.href.split('/')[window.location.href.split('/').length - 1]
        }
    }


    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu(clickedPage) {
        this.setState({
            menuOpen: false,
            activePage: clickedPage
        })
    }
    render() {
        return (
            <Router>
                <nav className='nav-small'>
                    <Menu
                        transition='elastic'
                        disableAutoFocus
                        isOpen={this.state.menuOpen}
                        onStateChange={(state) => this.handleStateChange(state)}>
                        <h1 id={this.state.activePage === '' ? 'active': undefined }><Link onClick={() => this.closeMenu('')} to='/' >Art & Dogs</Link></h1>
                        <ul className='small-ul'>
                            <li id={this.state.activePage === 'services' ? 'active' : undefined}> <Link onClick={() => this.closeMenu('services')} to='/services' >  Services </Link> </li>
                            <li id={this.state.activePage === 'tarif' ? 'active' : undefined}> <Link onClick={() => this.closeMenu('tarif')} to='/tarif' > Tarif </Link> </li>
                            <li id={this.state.activePage === 'team' ? 'active' : undefined}> <Link onClick={() => this.closeMenu('team')} to='/team' > L'équipe </Link> </li>
                            <li id={this.state.activePage === 'gallery' ? 'active' : undefined}> <Link onClick={() => this.closeMenu('gallery')} to='/gallery' > Galerie </Link> </li>
                            <li id={this.state.activePage === 'contact' ? 'active' : undefined}> <Link onClick={() => this.closeMenu('contact')} to='/contact' > Contact </Link> </li>
                            <li id={this.state.activePage === 'hours' ? 'active' : undefined}> <Link onClick={() => this.closeMenu('hours')} to='/hours' > Horaire </Link> </li>
                        </ul>
                    </Menu>
                </nav>
                <Route exact path='/' component={Home} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/tarif' component={Tarif} />
                <Route exact path='/team' component={Team} />
                <Route path='/gallery' component={GalleryDog} />
                <Route path='/contact' component={Contact} />
                <Route exact path='/hours' component={Hours} />
                <Route exact path='/data-policy' component={DataPolicy} />
            </Router>
        );
    }
}
