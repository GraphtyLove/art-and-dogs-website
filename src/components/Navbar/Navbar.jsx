import React, {Component, Fragment} from 'react';
import NavbarLarge from './NavbarLarge.jsx';
import NavbarSmall from './NavbarSmall.jsx';

export default class Navbar extends Component {
    render() {
        return (
            <Fragment>
                {
                    // if the window is large, call NavbarLarge, else, call NavbarSmall
                    this.props.isLarge
                    ? <NavbarLarge />
                    : <NavbarSmall />
                }
            </Fragment>
        );
    }
}
