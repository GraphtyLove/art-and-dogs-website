import React, { Component, Fragment } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Tarif from './components/Tarif/Tarif'
import Team from './components/Team/Team'

// Add a State here that store the page we are and display the components in relation with it with simple conditions + change the url with a GET request (simulate routes)
// OR
// Make reale routes (with meteor or node for exemple) -> if choossing this method, make a specific branch for it !!!

function App() {
    return (
        <Fragment>
            <Navbar />
            {/*<Home />*/}
            <Services />
            {/*<Tarif />*/}
            {/*<Team />*/}

        </Fragment>
    );
}

export default App;
