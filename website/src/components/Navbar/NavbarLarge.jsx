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
import DataPolicy from '../DataPolicy/DataPolicy'


export default class NavbarLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: window.location.href.split('/')[window.location.href.split('/').length - 1]
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
          <h1 id={this.state.activePage === '' ? 'active' : undefined}><Link onClick={() => this.updateActivePage('')} to='/'>Art & Dogs</Link></h1>
          <ul>
            <li id={this.state.activePage === 'services' ? 'active' : undefined} > <Link onClick={() => this.updateActivePage('services')} to='/services' >  Services </Link> </li>
            <li id={this.state.activePage === 'tarif' ? 'active' : undefined} > <Link onClick={() => this.updateActivePage('tarif')} to='/tarif' > Tarif </Link> </li>
            <li id={this.state.activePage === 'team' ? 'active' : undefined} > <Link onClick={() => this.updateActivePage('team')} to='/team' > L'équipe </Link> </li>
            <li id={this.state.activePage === 'gallery' ? 'active' : undefined} > <Link onClick={() => this.updateActivePage('gallery')} to='/gallery' > Galerie </Link> </li>
            <li id={this.state.activePage === 'contact' ? 'active' : undefined} > <Link onClick={() => this.updateActivePage('contact')} to='/contact' > Contact </Link> </li>
            <li id={this.state.activePage === 'hours' ? 'active' : undefined} > <Link onClick={() => this.updateActivePage('hours')} to='/hours' > Horaire </Link> </li>
          </ul>
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
