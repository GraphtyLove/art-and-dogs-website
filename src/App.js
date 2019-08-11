import React, { Component, Fragment } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {
    return (
        <Fragment>
            <Navbar />
            <Home />
        </Fragment>
    );
}

export default App;
