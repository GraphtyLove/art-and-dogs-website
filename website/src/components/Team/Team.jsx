import React, { Component, Fragment } from 'react';

// Styles
import './Team.scss'

// Pictures
import waterColor from "../../assets/img/watercolor.png";
import teamPicture from "../../assets/img/Gallery/Gallery-15.jpg";

// Components
import PageTitle from "../PageTitle/PageTitle";


export default class Team extends Component {
    render() {
        return (
            <Fragment>
                <img className='watercolor-team-bottom' src={waterColor} alt="watercolor background" />
                <img className='watercolor-team-top' src={waterColor} alt="watercolor background" />

                <PageTitle title='Notre équipe' divider='divider-colored' />

                <main className='team-container'>
                    <section>
                        <img src={teamPicture} alt="Notre équipe" className='picture-team' />
                    </section>
                    <article className='team-txt'>
                        <h3 id='team-title'>Daniele Snijers</h3>
                        <p>
                            Après mes études, j’ouvre mon salon de toilettage « DOG SALOON «  à Charleroi.  Je deviens
                            ensuite formatrice d'esthétique canine en promotion social pendant 10 ans. Mais la clientèle
                            me manque et je décide de m’associer avec mon amie Valérie Di Pietrantonio  dans son salon
                            «  ART AND DOGS » de Marcinelle.
                            Je quitte donc l’enseignement. Je participe en tant que juge à de nombreux concours de
                            toilettage en France et en Belgique. Ma passion pour le toilettage asiatique se précise de
                            plus en plus et poursuis de nombreux perfectionnements.
                        </p>
                        <p>
                            Je dispose également de certifications en toilettage asiatique, cosmétologie, massages thérapeutiques et dermatologie.
                        </p>
                    </article>
                </main>
            </Fragment>
        );
    }
}
