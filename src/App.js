import React, { Component, Fragment } from 'react';

// Styles
import './App.scss';

// Components
import Navbar from './components/Navbar/Navbar.jsx'
import Background from "./components/Background/Background.jsx";


export default class App extends Component {
    render(){
        return (
            <Fragment>
                <Navbar />
            </Fragment>
        );
    }
}
