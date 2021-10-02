import React, { Fragment } from 'react'
import PageTitle from "../PageTitle/PageTitle";

// Style:
import "./DataPolicy.scss"

const DataPolicy = () => {
    return (
        <Fragment>
            <PageTitle title="Politique d'utilisation des données personnelles" divider="divider-colored" />
            <main className="data-container">
                <h2>Comment Art and Dogs utilise mes données personnelles?</h2>
                <p>
                    Les seules données que nous sommes susceptibles de collecter sont les
                    données que vous pouvez nous fournir à travers notre formulaire de demande
                    de rendez-vous.
                </p>
                <p>
                    Nous enregistrons vos données dans une base de données numérique sécurisée
                    le temps de convenir avec vous d'une date de rendez-vous. Une fois que vous
                    confirmez votre rendez-vous, nous supprimons TOUTES vos données dans les
                    plus brefs délais.
                </p>
                <h2>Accès à mes données</h2>
                <p>
                    Vous pouvez à tout moment nous demander l'accès à la TOTALITÉ de vos données
                    personnelles enregistrées dans notre système. Pour ce faire il vous suffit de
                    nous en faire la demande explicite à l'adresse mail elodie.evrard3110@gmail.com
                    Nous vous enverrons toutes vos données dans un délai de 48h.
                </p>
                <h2>Informations légales sur Art and Dogs</h2>
                <p>
                    ART AND DOGS est enregistré dans le moniteur Belge depuis le 1 avril 2021 en tant que PERSONNE PHYSIQUE
                    au nom de EVARD ELODIE avec le NUMÉRO D'ENTREPRISE: 
                    SITUÈ: Avenue Eugène Mascaux 781 6001 Charleroi.
                </p>
                <h2>Informations supplémentaires</h2>
                <p>
                    Pour toutes demandes d'informations supplémentaires, veuillez nous contacter par mail
                    à l'adresse email elodie.evrard3110@gmail.com ou par tèlèphone au numéro: 0496 86 86 87.
                </p>
            </main>
        </Fragment>
    )
}

export default DataPolicy