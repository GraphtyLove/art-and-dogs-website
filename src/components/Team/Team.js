import React, {Component, Fragment} from 'react';
import './Team.scss'
import waterColor from "../../assets/img/watercolor.png";
import danieleSnijers from "../../assets/img/daniele-snijers.jpg";

export default class Team extends Component {
    render() {
        return (
            <Fragment>
                <header className='flex-center'>
                    <img className='watercolor-team-bottom' src={waterColor} alt="watercolor background" />
                    <img className='watercolor-team-top' src={waterColor} alt="watercolor background" />
                    <h2 className='main-title'>L'équipe</h2>
                    <div className='divider-colored' />
                </header>
                <main className='team-container'>
                    <section>
                        <img src={danieleSnijers} alt="Photo de Danièle Snijers" className='picture-daniele' />
                    </section>
                    <article className='team-txt'>
                        <p>
                            Après mes études, j’ouvre mon salon de toilettage « DOG SALOON «  à Charleroi.  Je deviens
                            ensuite formatrice d'esthétique canine en promotion social pendant 10 ans. Mais la clientèle
                            me manque et je décide de m’associer avec mon amie Valérie Di Pietrantonio  dans son salon
                            «  ART AND DOGS » de Marcinelle.
                            Je quitte donc l’enseignement. Je participe en tant que juge à de nombreux concours de
                            toilettage en France et en Belgique. Ma passion pour le toilettage asiatique se précise de
                            plus en plus et poursuis de nombreux perfectionnements.
                        </p>
                        <p>Notre équipe se compose de Danièle, d'Elodie et d'Idaline nos toiletteuses professionnelles
                            canine.</p>
                        <p>Mais nous avons également une éleveuse et toiletteuse de chats: Amandine.</p>
                    </article>
                </main>
            </Fragment>
        );
    }
}
