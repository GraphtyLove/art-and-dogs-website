import React, { useState, Fragment } from "react"
import { Link } from 'react-router-dom'

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

// Locate the php API to will send the mail
const API_PATH = "http://51.210.8.134/"

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


    // Send name, email and message to the PHP API
    const handleFormSubmit = event => {
        event.preventDefault()

        const allStates = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            dogName: dogName,
            dogBreed: dogBreed,
            remarque: remarque,
            isDataPolicyAccepted: isDataPolicyAccepted
        }

        fetch(API_PATH + "appointment-client", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(allStates),
        })
            .then(result => result.json())
            .then(resultJson => {
                console.log('result', resultJson)
                if (resultJson.success) {
                    setFormSuccessMessage("Votre rendez-vous à bien été envoyé. Nous vous recontactons dans les plus brefs délais.")
                    setFormErrormessage("")
                } else {
                    setFormErrormessage(resultJson.error)
                }
            })
            .catch(err => console.log('error: ', err))
    }

    return (
        <Fragment>
            <main className="bg-contact">

                <PageTitle title="Contact" divider="divider-white" />

                <div className="contact-container">
                    <section className="form-container">
                        <h2>Demande de rendez-vous</h2>
                        <section>
                            <h3>Nom</h3>
                            <input
                                type="text"
                                placeholder="Dupont"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </section>

                        <section>
                            <h3>Prénom</h3>
                            <input
                                type="text"
                                placeholder="Marie"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </section>

                        <section>
                            <h3>Téléphone portable</h3>
                            <input
                                type="text"
                                placeholder="04 91 00 00 00"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </section>
                        <section>
                            <h3>Nom du chien</h3>
                            <input
                                type="text"
                                placeholder="Rex"
                                value={dogName}
                                onChange={e => setDogName(e.target.value)}
                            />
                        </section>
                        <section>
                            <h3>Race du chien</h3>
                            <input
                                type="text"
                                placeholder="Caniche"
                                value={dogBreed}
                                onChange={e => setDogBreed(e.target.value)}
                            />
                        </section>
                        <section>
                            <h3>Remarques</h3>
                            <input
                                type="text"
                                placeholder="Je ne suis disponible que..."
                                value={remarque}
                                onChange={e => setRemarque(e.target.value)}
                            />
                        </section>
                        <section>
                            <input value={isDataPolicyAccepted} onChange={e => setIsDataPolicyAccepted(e.target.checked)} type="checkbox" style={{ margin: "0 10px", width: "20px", height: "20px" }} />
                            J'ai lu et accepter la <Link to='/data-policy'>politique de confidentialité d'Art and Dogs </Link>
                        </section>

                        <section>
                            <button onClick={handleFormSubmit}>
                                Envoyer
                            </button>
                        </section>

                        {formSuccessMessage && <p className="success">{formSuccessMessage}</p>}

                        {formErrormessage && <p className="error"> {formErrormessage} </p>}

                    </section>
                    <section className="info-container">
                        <h2>Informations de contact</h2>
                        <ul>
                            <li><img src={mail} alt="mail" /> <p><a href="mailto:danielesnijers@gmail.com">  DanieleSnijers@gmail.com </a></p></li>
                            <li><img src={phoneImage} alt="téléphone" /> <p><a href="tel:+32496868687"> 0496 / 86 86 87 </a></p></li>
                            <li><img src={map} alt="carte" /> <p> Avenue Eugène Mascaux 781, 6001, Marcinelle </p></li>
                            <li><img src={facebook} alt="facebook" /> <p><a href="https://www.facebook.com/artanddogs/">Art and Dogs</a> </p></li>

                        </ul>
                    </section>
                </div>
            </main>
            <section>
                <iframe
                    className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.113816295115!2d4.42704241584942!3d50.38307680009807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2242bfbc4217b%3A0xac93b985ef300a19!2sArt+and+Dogs!5e0!3m2!1sfr!2sbe!4v1566169711322!5m2!1sfr!2sbe"
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