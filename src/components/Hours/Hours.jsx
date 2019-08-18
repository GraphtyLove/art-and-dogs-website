import React, {Component, Fragment} from 'react';
import './Hours.scss'
import PageTitle from "../PageTitle/PageTitle";

export default class Hours extends Component {
    render() {
        return (
            <Fragment>
                <PageTitle title="Nos heures d'ouvertures" divider='divider-colored' />

                <main className='hours-page flex-center'>
                    <div className='hours-global-c'>
                        <section className="day-container">
                            <div className="day">Lundi</div>
                            <div className="hours closed">Fermé</div>
                        </section>
                        <section className="day-container">
                            <div className="day">Mardi</div>
                            <div className="hours">10h - 18h</div>
                        </section>
                        <section className="day-container">
                            <div className="day">Mercredi</div>
                            <div className="hours closed">Fermé</div>
                        </section>
                        <section className="day-container">
                            <div className="day">Jeudi</div>
                            <div className="hours">10h - 18h</div>
                        </section>
                        <section className="day-container">
                            <div className="day">Vendredi</div>
                            <div className="hours">10h - 18h</div>
                        </section>
                        <section className="day-container">
                            <div className="day">Samedi</div>
                            <div className="hours">10h - 18h</div>
                        </section>
                        <section className="day-container">
                            <div className="day">Dimanche</div>
                            <div className="hours closed">Fermé</div>
                        </section>
                    </div>
                </main>
            </Fragment>
        );
    }
}
