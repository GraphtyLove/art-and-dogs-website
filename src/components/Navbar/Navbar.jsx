import React, {Component, Fragment} from 'react';

// Components
import NavbarLarge from './NavbarLarge.jsx';
import NavbarSmall from './NavbarSmall.jsx';

// * ---------- Switch between large and small menu ---------- *
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
		viewPortWidthIsLarge = true
	} else {
        viewPortWidthIsLarge = false
	}
};

// Initialize $viewportWidth & $viewPortWidthIsLarge when the page load
setViewportWidth();
logWidth();


export default class Navbar extends Component {
     constructor(props) {
        super(props);
        this.state = {
            viewPortWidthIsLarge: viewPortWidthIsLarge
        };
        // bind the "this" of handleResize() to the "this" of the Class
        this.handleResize = this.handleResize.bind(this)
    }
    // Add an event listener when the user RESIZE the window => call handleResize()
    componentDidMount(){
        window.addEventListener('resize', this.handleResize)
    }
    // Change the state $viewPortWidthIsLarge depending on the size of the window
    handleResize(){
        setViewportWidth();
        if (viewportWidth > 1060) {
		this.setState({viewPortWidthIsLarge: true })
	    } else {
        this.setState({viewPortWidthIsLarge: false })
	    }
    }
    render() {
        return (
            <Fragment>
                {
                    // if the window is large, call NavbarLarge, else, call NavbarSmall
                    this.state.viewPortWidthIsLarge
                    ? <NavbarLarge />
                    : <NavbarSmall />
                }
            </Fragment>
        );
    }
}
