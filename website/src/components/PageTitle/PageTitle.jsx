import React, {Component} from 'react';

// Styles
import './PageTitle.scss'


export default class PageTitle extends Component {
    render() {
        return (
            <header className='PageTitle flex-center'>
                <h2 style={{color: `${ this.props.titleColor }`}} className='main-title'> { this.props.title } </h2>
                <div className={ this.props.divider } />
            </header>
        );
    }
}
