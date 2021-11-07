import React, { Component, Fragment } from 'react';

// Styles
import './Tarif.scss'

// Components
import PageTitle from "../PageTitle/PageTitle";
import PushToTop from "../PushToTop/PushToTop"
import Background from "../Background/Background";

export default class Tarif extends Component {
    render() {
        return (
            <Fragment>
                <Background />
                <PageTitle title='Tarif' divider='divider-colored' />

                <main className='main-container'>


                <section className='tarif-container' id='grooming'>
                        <header className='header-table'>
                            <h3>Bain (ongles + oreilles + hygiène compris)</h3>
                            <p>Le prix peut varier selon l'état de l'animal</p>
                        </header>
                        <ul>
                            <li className="breed">
                                <div className="breed-name table-name">Petit chien</div>
                                <div className="price">30€</div>
                            </li>
                        </ul>
                    </section>


                    <section className='tarif-container' id='grooming'>
                        <header className='header-table'>
                            <h3>Bain + égalisation</h3>
                            <p>Le prix peut varier selon l'état de l'animal</p>
                        </header>
                        <ul>
                            <li className="breed">
                                <div className="breed-name table-name">Petit chien</div>
                                <div className="price">35€</div>
                            </li>
                        </ul>
                    </section>

                    <section className='tarif-container' id='grooming'>
                        <header className='header-table'>
                            <h3>Coupe ciseaux et trimming</h3>
                            <p>Le bain est obligatoire - le prix peut varier selon l'état de l'animal</p>
                        </header>
                        <ul>
                            <li className="breed">
                                <div className="breed-name table-name">Petit chien</div>
                                <div className="price">50€ - 60€</div>
                            </li>                           
                        </ul>
                    </section>


                    <section className='tarif-container' id='grooming'>
                        <header className='header-table'>
                            <h3>Coupe tondeuse</h3>
                            <p>Le bain est obligatoire - le prix peut varier selon l'état de l'animal</p>
                        </header>
                        <ul>
                            <li className="breed">
                                <div className="breed-name table-name">Petit chien</div>
                                <div className="price">45€</div>
                            </li>
                        </ul>
                    </section>

                    <div className='tarif-sub-container'>
                        <section className='tarif-container'>
                            <header className='header-table'>
                                <h3>Thalassothérapie</h3>
                                <p>Produits naturels sans SSL.</p>
                            </header>
                            <ul>
                                <li className="thalasso">
                                    <div className="thalasso-name table-name">Protocole Anti-mue <br /> <span className='small'>(Anti-nœuds, problème de peau)</span></div>
                                    <div className="price">15€ en plus du toilettage ( 30 min )</div>
                                </li>
                            </ul>
                        </section>
                        <section className='tarif-container'>
                            <header className='header-table'>
                                <h3>Hors toilettage</h3>
                                <p>Services.</p>
                            </header>
                            <ul>
                                <li className="extra">
                                    <div className="extra-name table-name">Coupe d'ongle et nettoyage coussinets</div>
                                    <div className="price">5€</div>
                                </li>
                                <li className="extra">
                                    <div className="extra-name table-name">Zones d'hygiène</div>
                                    <div className="price">5€</div>
                                </li>
                                <li className="extra">
                                    <div className="extra-name table-name">Épilation oreilles</div>
                                    <div className="price">5€</div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </main>
                <PushToTop />
            </Fragment>
        );
    }
}
