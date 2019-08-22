import React, { Component, Fragment } from 'react';

// Styles
import './App.scss';

// Components
import Navbar from './components/Navbar/Navbar.jsx'

// the size of the window
let viewportWidth;
// true if the viewportWidth > 1060px
let viewPortWidthIsLarge;

// Set viewportWidth as the actual width of the window
const setViewportWidth = () => {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};

// Log the width of the window and depending of that, set viewPortWidthIsLarge as true or false
const logWidth = () => {
	if (viewportWidth > 1060) {
		console.log('Wide viewport');
		viewPortWidthIsLarge = true
	} else {
		console.log('Small viewport');
        viewPortWidthIsLarge = false
	}
};

// Initialize viewportWidth & viewPortWidthIsLarge when the page load
setViewportWidth();
logWidth();

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewPortWidthIsLarge: viewPortWidthIsLarge
        };
        // bind the "this" of handleResize to the this of the class
        this.handleResize = this.handleResize.bind(this)
    }
    // Add an event listener when the user RESIZE the window => call handleResize()
    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }
    // Change the state viewPortWidthIsLarge depending on the size of the window
    handleResize(){
        setViewportWidth();
        if (viewportWidth > 1060) {
		console.log('Wide viewport');
		this.setState({viewPortWidthIsLarge: true })
	    } else {
		console.log('Small viewport');
        this.setState({viewPortWidthIsLarge: false })
	    }
    }

    render(){
        return (
            <Fragment>
                <Navbar isLarge={this.state.viewPortWidthIsLarge} />
            </Fragment>
        );
    }
}
