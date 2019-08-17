import React, {Component} from 'react';
import './PageTitle.scss'

export default class PageTitle extends Component {
    render() {
        return (
            <header className='PageTitle flex-center'>
                <h2 className='main-title'> { this.props.title } </h2>
                <div className={ this.props.divider } />
            </header>
        );
    }
}
