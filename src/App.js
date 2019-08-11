import React, { Component, Fragment } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'

function App() {
    return (
        <Fragment>
            <Navbar />
            {/*<Home />*/}
            <Services />
        </Fragment>
    );
}

export default App;
