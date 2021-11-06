import React, { useState, Fragment } from "react"
import { Link } from 'react-router-dom'
import formatDataForDb from '../../utils/formFormatter'

// Styles
import "./Contact.scss"

// Pictures
import mail from "../../assets/img/mail.png"
import phoneImage from "../../assets/img/phone.png"
import map from "../../assets/img/map.png"
import facebook from "../../assets/img/facebook.png"

// Components
import PageTitle from "../PageTitle/PageTitle";
import PushToTop from "../PushToTop/PushToTop";

// Firebase
import firebase from '../../utils/firebaseConfig'

const Contact = () => {
    // STATE :
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phone, setPhone] = useState("")
    const [dogName, setDogName] = useState("")
    const [dogBreed, setDogBreed] = useState("")
    const [remarque, setRemarque] = useState("")
    const [isDataPolicyAccepted, setIsDataPolicyAccepted] = useState(false)
    const [formSuccessMessage, setFormSuccessMessage] = useState("")
    const [formErrormessage, setFormErrormessage] = useState("")

    // Send from data to the API
    const sendDataToDb = event => {
        event.preventDefault()
        // * --- Firebase SetUp --- *
        const db = firebase.firestore()
        
        // format and sanitize data
        const appointmentData = formatDataForDb(firstName, lastName, phone, dogName, dogBreed, remarque, isDataPolicyAccepted)
        
        // Set error state if there is
        appointmentData && appointmentData.error && setFormErrormessage(appointmentData.error)
        
        if (appointmentData && appointmentData.formatted){
            // Send data to DB
            db.collection('appointments').add(appointmentData)
                .then(() => setFormSuccessMessage('Votre demande de rendez-vous à bien été envoyée. Nous vous répondrons dans les 48h!'))
                .catch(() => setFormErrormessage('Erreur interne du serveur. Veuillez réessayer plus tard.'))
        }
    }

    return (
        <Fragment>
            <main className="bg-contact">

                <PageTitle title="Contact" divider="divider-white" />

                <div className="contact-container">
                    <section className="form-container">
                        <h2>Demande de rendez-vous</h2>
                        <section className="input-container">
                            <h3>Nom *</h3>
                            <input
                                type="text"
                                placeholder="Dupont"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                minLength={2}
                                maxLength={20}
                                required
                            />
                        </section>

                        <section className="input-container">
                            <h3>Prénom *</h3>
                            <input
                                type="text"
                                placeholder="Marie"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                minLength={2}
                                maxLength={20}
                                required
                            />
                        </section>

                        <section className="input-container">
                            <h3>Téléphone portable *</h3>
                            <input
                                type="text"
                                placeholder="04 91 00 00 00"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                minLength={10}
                                maxLength={12}
                                required
                            />
                        </section>
                        <section className="input-container">
                            <h3>Nom du chien *</h3>
                            <input
                                type="text"
                                placeholder="Rex"
                                value={dogName}
                                onChange={e => setDogName(e.target.value)}
                                minLength={2}
                                maxLength={20}
                                required
                            />
                        </section>
                        <section className="input-container">
                            <h3>Race du chien *</h3>
                            <input
                                type="text"
                                placeholder="Caniche"
                                value={dogBreed}
                                onChange={e => setDogBreed(e.target.value)}
                                minLength={2}
                                maxLength={20}
                                required
                            />
                        </section>
                        <section className="input-container">
                            <h3>Remarques</h3>
                            <input
                                type="text"
                                placeholder="Informations supplémentaires..."
                                value={remarque}
                                onChange={e => setRemarque(e.target.value)}
                                minLength={2}
                                maxLength={130}
                            />
                        </section>
                        <section className="checkbox-container">
                            <input
                                className="checkbox"
                                value={isDataPolicyAccepted}
                                onChange={e => setIsDataPolicyAccepted(e.target.checked)}
                                type="checkbox"
                                required
                            />
                            <span>J'ai lu et accepté la <Link to='/data-policy'>politique de confidentialité d'Art and Dogs </Link></span>
                        </section>

                        <section>
                            <button
                                onClick={sendDataToDb}
                                disabled={formSuccessMessage}
                            >
                                Envoyer
                            </button>
                        </section>

                        {formSuccessMessage && <p className="success">{formSuccessMessage}</p>}

                        {formErrormessage && <p className="error"> {formErrormessage} </p>}

                    </section>
                    <section className="info-container">
                        <h2>Informations de contact</h2>
                        <ul className="info-list-container">
                            <li><img src={mail} alt="mail" /> <p><a href="mailto:danielesnijers@gmail.com">  danielesnijers@gmail.com </a></p></li>
                            <li><img src={phoneImage} alt="téléphone" /> <p><a href="tel:+32455128282"> 0455 12 82 82 </a></p></li>
                            <li><img src={map} alt="carte" /> <p>Rue du Rambulant 78, 6060 Gilly</p></li>
                            <li><img src={facebook} alt="facebook" /> <p><a href="https://www.facebook.com/artanddogs/">Art and Dogs</a> </p></li>

                        </ul>
                    </section>
                </div>
            </main>
            <section>
                <iframe
                    className="map"

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.542406319704!2d4.498517815730686!3d50.430996779472686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c228799dd5d903%3A0xbf76787b9ab1feb2!2sRue%20du%20Rambulant%2078%2C%206060%20Charleroi!5e0!3m2!1sen!2sbe!4v1636229515083!5m2!1sen!2sbe"
                    title="map"
                    width="100%"
                    height="450"
                    allowFullScreen
                />
            </section>
            <PushToTop />
        </Fragment>
    );
}

export default Contact