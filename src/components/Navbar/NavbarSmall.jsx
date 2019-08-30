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
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
    }

    handleStateChange (state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu () {
        this.setState({menuOpen: false})
    }

    render() {
        return (
            <Router>
                <nav className='nav-small'>
                    <Menu
                        transition='elastic'
                        disableAutoFocus
                        isOpen={ this.state.menuOpen }
                        onStateChange={ (state) => this.handleStateChange(state) }>
                        <h1 id='active'><Link onClick={ () => this.closeMenu() } to='/' >Art & Dogs</Link></h1>
                        <ul>
                            <li> <Link onClick={ () => this.closeMenu() } to='/services' >  Nos services </Link> </li>
                            <li> <Link onClick={ () => this.closeMenu() } to='/tarif' > Tarif </Link> </li>
                            <li> <Link onClick={ () => this.closeMenu() } to='/team' > L'équipe </Link> </li>
                            <li> <Link onClick={ () => this.closeMenu() } to='/Gallery' > Galerie </Link> </li>
                            <li> <Link onClick={ () => this.closeMenu() } to='/contact' > Contact </Link> </li>
                            <li> <Link onClick={ () => this.closeMenu() } to='/hours' > Nos heures </Link> </li>
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
