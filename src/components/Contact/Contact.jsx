import React, {Component, Fragment} from 'react';
import axios from 'axios';

// Styles
import './Contact.scss'

// Pictures
import mail from '../../assets/img/mail.png'
import phone from '../../assets/img/phone.png'
import map from '../../assets/img/map.png'
import facebook from '../../assets/img/facebook.png'

// Components
import PageTitle from "../PageTitle/PageTitle";
import PushToTop from "../PushToTop/PushToTop";

// Locate the php API to will send the mail
const API_PATH = 'http://localhost/art-and-dogs/api/contact.php';

export default class Contact extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            mailSent: false,
            error: null,
            errorMessage: ''
        }
    }
    // Send name, email and message to the PHP API
    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })
        // fetch(`${API_PATH}`, {
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 			},
		// 			method: 'POST',
		// 			body: JSON.stringify(this.state),
		// 		})
        .then(result => {
            if (result.data.sent) {
              this.setState({
                mailSent: result.data.sent
              });
              this.setState({ error: false });
            } else {
              this.setState({ error: true });
              this.setState({ errorMessage: result.data.message })
            }
        })
      .catch(error => this.setState({ error: error.message }));
  };

    render() {
        return (
            <Fragment>
                <main className='bg-contact'>
                    <PageTitle title='Contact' divider='divider-white' />
                    <div className='contact-container'>
                        <section className='form-container'>
                            <form action="">
                                <label>Nom
                                    <input id='name'
                                           name='name'
                                           type="text"
                                           placeholder='Entrer votre nom'
                                           value={this.state.name}
                                           onChange={ e => this.setState({ name: e.target.value })} />
                                </label>
                                <label>Adresse mail
                                    <input id='email'
                                           name='email'
                                           type="text"
                                           placeholder='Entrer votre email'
                                           value={this.state.email}
                                           onChange={ e => this.setState({ email: e.target.value })} />
                                </label>
                                <label>Message
                                    <textarea id='message'
                                              name='message'
                                              placeholder='Entrer votre message'
                                              value={this.state.message}
                                              onChange={ e => this.setState({ message: e.target.value })} />
                                </label>
                                <input
                                    className='submit'
                                    type="submit"
                                    value='Envoyer'
                                    onClick={ e => this.handleFormSubmit(e) } />
                                <div>
                                  { this.state.mailSent && <div>Votre mail à bien été envoyé. Nous vous répondrons dés que possible.</div> }
                                  { this.state.error && <div>Erreur: </div> }
                                </div>
                            </form>
                        </section>
                        <section className='info-container'>
                            <ul>
                                <li><img src={mail} alt="mail"/> <p> DanieleSnijers@gmail.com </p></li>
                                <li><img src={phone} alt="téléphone"/> <p><a href="tel:+32496868687"> 0496 / 86 86 87 </a></p></li>
                                <li><img src={map} alt="carte"/> <p> Avenue Eugène Mascaux 781, 6001, Marcinelle </p></li>
                                <li><img src={facebook} alt="facebook"/> <p><a href="https://www.facebook.com/artanddogs/">Art and Dogs</a> </p></li>

                            </ul>
                        </section>
                    </div>
                </main>
                <section>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.113816295115!2d4.42704241584942!3d50.38307680009807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2242bfbc4217b%3A0xac93b985ef300a19!2sArt+and+Dogs!5e0!3m2!1sfr!2sbe!4v1566169711322!5m2!1sfr!2sbe"
                        title='map' width="100%" height="450" allowFullScreen />
                </section>
                <PushToTop />
            </Fragment>
        );
    }
}
