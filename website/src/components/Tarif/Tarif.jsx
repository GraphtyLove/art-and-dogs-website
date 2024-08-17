import React, { Component, Fragment } from "react";

// Styles
import "./Tarif.scss";

// Components
import PageTitle from "../PageTitle/PageTitle";
import PushToTop from "../PushToTop/PushToTop";
import Background from "../Background/Background";

export default class Tarif extends Component {
  render() {
    return (
      <Fragment>
        <Background />
        <PageTitle title="Tarif" divider="divider-colored" />

        <main className="main-container">
          <section className="tarif-container" id="grooming">
            <header className="header-table">
              <h3>Toilettage</h3>
              <p>
                Le bain est obligatoire - le prix peut varier selon l'état de
                l'animal
              </p>
            </header>
            <ul>
              <li className="breed">
                <div className="breed-name table-name">
                  Coupe ciseaux et trimming
                </div>
                <div className="price">60€ - 80€</div>
              </li>
              <li className="breed">
                <div className="breed-name table-name">Coupe tondeuse</div>
                <div className="price">55€</div>
              </li>
            </ul>
          </section>

          <div className="tarif-sub-container">
            <section className="tarif-container">
              <header className="header-table">
                <h3>Hors toilettage</h3>
                <p>Inclut dans le prix d'un toilettage.</p>
              </header>
              <ul>
                <li className="extra">
                  <div className="extra-name table-name">
                    Coupe d'ongles et nettoyage coussinets
                  </div>
                  <div className="price">8€</div>
                </li>
                <li className="extra">
                  <div className="extra-name table-name">Zones d'hygiène</div>
                  <div className="price">8€</div>
                </li>
                <li className="extra">
                  <div className="extra-name table-name">
                    Épilation oreilles
                  </div>
                  <div className="price">8€</div>
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
