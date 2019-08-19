import React, {Component, Fragment} from 'react';

// Styles
import './Contact.scss'

// Pictures
import mail from '../../assets/img/mail.png'
import phone from '../../assets/img/phone.png'
import map from '../../assets/img/map.png'

// Components
import PageTitle from "../PageTitle/PageTitle";
import PushToTop from "../PushToTop/PushToTop";


export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <main className='bg-contact'>
                    <PageTitle title='Contact' divider='divider-white' />
                    <div className='contact-container'>
                        <section className='form-container'>
                            <form action="">
                                <label htmlFor="">Nom<input type="text" placeholder='Entrer votre nom' /></label>
                                <label htmlFor="">Adresse mail<input type="text" placeholder='Entrer votre email' /></label>
                                <label htmlFor="">Message<textarea placeholder='Entrer votre message' /></label>
                                <input className='submit' type="submit" value='Envoyer' />
                            </form>
                        </section>
                        <section className='info-container'>
                            <ul>
                                <li><img src={mail} alt="mail"/> <p> DanieleSnijers@gmail.com </p></li>
                                <li><img src={phone} alt="téléphone"/> <p> 0496 / 456 125 </p></li>
                                <li><img src={map} alt="carte"/> <p> Avenue Eugène Mascaux 781, 6001, Marcinelle </p></li>
                            </ul>
                        </section>
                    </div>
                </main>
                <section>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.113816295115!2d4.42704241584942!3d50.38307680009807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2242bfbc4217b%3A0xac93b985ef300a19!2sArt+and+Dogs!5e0!3m2!1sfr!2sbe!4v1566169711322!5m2!1sfr!2sbe"
                        width="100%" height="450" allowFullScreen />
                </section>
                <PushToTop />
            </Fragment>
        );
    }
}
