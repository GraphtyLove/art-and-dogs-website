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
            menuOpen: false,
            activePage: 'home'
        }
    }


    handleStateChange (state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu ( clickedPage ) {
        this.setState({
            menuOpen: false,
            activePage: clickedPage
        })
    }
    render() {
        return (
            <Router>
                    {/*{ this.state.activePage === 'services' && this.removeHomeDog() }*/}
                    {/*{ this.state.activePage !== 'home' && this.state.activePage !== 'services'*/}
                    {/*    ? this.changeStyle()*/}
                    {/*    : this.resetStyleToDefault() }*/}

                        <nav className='nav-small'>
                    <Menu
                        transition='elastic'
                        disableAutoFocus
                        isOpen={ this.state.menuOpen }
                        onStateChange={ (state) => this.handleStateChange(state) }>
                        <h1  id={ this.state.activePage === 'home' && 'active' }><Link onClick={ () => this.closeMenu('home') } to='/' >Art & Dogs</Link></h1>
                        <ul className='small-ul'>
                            <li id={ this.state.activePage === 'services' && 'active' }> <Link onClick={ () => this.closeMenu('services') } to='/services' >  Nos services </Link> </li>
                            <li id={ this.state.activePage === 'tarif' && 'active' }> <Link onClick={ () => this.closeMenu('tarif') } to='/tarif' > Tarif </Link> </li>
                            <li id={ this.state.activePage === 'team' && 'active' }> <Link onClick={ () => this.closeMenu('team') } to='/team' > L'équipe </Link> </li>
                            <li id={ this.state.activePage === 'gallery' && 'active' }> <Link onClick={ () => this.closeMenu('gallery') } to='/Gallery' > Galerie </Link> </li>
                            <li id={ this.state.activePage === 'contact' && 'active' }> <Link onClick={ () => this.closeMenu('contact') } to='/contact' > Contact </Link> </li>
                            <li id={ this.state.activePage === 'hours' && 'active' }> <Link onClick={ () => this.closeMenu('hours') } to='/hours' > Nos heures </Link> </li>
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
