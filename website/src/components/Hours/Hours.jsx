import React, { Component, Fragment } from 'react';
import './Hours.scss'
import PageTitle from "../PageTitle/PageTitle";
import Background from "../Background/Background";

export default class Hours extends Component {
    render() {
        return (
            <Fragment>
                <Background />
                <PageTitle title="Sur rendez-vous uniquement!" divider='divider-colored' />
            </Fragment>
        );
    }
}
