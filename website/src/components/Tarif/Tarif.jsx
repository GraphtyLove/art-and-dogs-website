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
                            <h3>Toilettage</h3>
                            <p>Le bain est obligatoire - le prix peut varier selon l'état de l'animal</p>
                        </header>
                        <ul>
                            <li className="breed">
                                <div className="breed-name table-name">Chat</div>
                                <div className="price">40€ - 60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Akita</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">American staff</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Bearded Collie</div>
                                <div className="price">70€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Berger blanc suisse</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Berger Australien</div>
                                <div className="price">55€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Berger Allemand</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Bichon</div>
                                <div className="price">40€ / 50€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Border Collie</div>
                                <div className="price">55€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Bouvier bernois</div>
                                <div className="price">70€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Bouvier des Flandres</div>
                                <div className="price">70€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Bouledogue Français</div>
                                <div className="price">45€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Bouledogue Anglais</div>
                                <div className="price">55€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Caniche</div>
                                <div className="price">40€ / 45€ / 60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Carlin</div>
                                <div className="price">40€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Chihuahua poils courts</div>
                                <div className="price">30€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Chow Chow</div>
                                <div className="price">80€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Cocker</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Collie</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Dogue de Bordeaux</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Doberman géant</div>
                                <div className="price">40€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Fox terrier</div>
                                <div className="price">45€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Golden</div>
                                <div className="price">65€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Husky</div>
                                <div className="price">65€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Labrador</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Scottish</div>
                                <div className="price">55€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Shetland</div>
                                <div className="price">55€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Shiba Inu</div>
                                <div className="price">40€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Shih Tzu</div>
                                <div className="price">40€ / 50€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Spitz</div>
                                <div className="price">45€ / 50€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Teckel</div>
                                <div className="price">45€ / 55€ / 65€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Terrier Tibétain</div>
                                <div className="price">60€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Terreneuve</div>
                                <div className="price">90€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Westie</div>
                                <div className="price">55€</div>
                            </li>
                            <li className="breed">
                                <div className="breed-name table-name">Yorkshire</div>
                                <div className="price">40€ / 45€</div>
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
                                <li className="thalasso">
                                    <div className="thalasso-name table-name">Soins shampoing personnalisé</div>
                                    <div className="price">5€ ( 5 min )</div>
                                </li>
                                <li className="thalasso">
                                    <div className="thalasso-name table-name">Bain crème personnalisée</div>
                                    <div className="price">5€ ( 5 min )</div>
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
                            </ul>
                        </section>
                    </div>
                </main>
                <PushToTop />
            </Fragment>
        );
    }
}
