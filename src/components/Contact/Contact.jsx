import React, {Component, Fragment} from "react";

// Styles
import "./Contact.scss"

// Pictures
import mail from "../../assets/img/mail.png"
import phone from "../../assets/img/phone.png"
import map from "../../assets/img/map.png"
import facebook from "../../assets/img/facebook.png"

// Components
import PageTitle from "../PageTitle/PageTitle";
import PushToTop from "../PushToTop/PushToTop";

// Locate the php API to will send the mail
const API_PATH = "http://localhost/art-and-dogs/api/mailer.php";

export default class Contact extends Component {
    constructor (props) {
        super(props);
        // STATE :
        this.state = {
            name: "",
            email: "",
            message: "",
            mailSent: false,
            error: null,
            errorMessage: "",
            successMessage: ""
        }
    }
    // Send name, email and message to the PHP API
    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);

        fetch(`${API_PATH}`, {
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
					body: JSON.stringify(this.state),
				})
        .then(result => result.json())
            .then(resultJson => {
            console.log(resultJson);
            if (resultJson.sent) {
              this.setState({
                mailSent: resultJson.sent,
                successMessage: resultJson.message,
                error: false
              });
            } else {
              this.setState({
                  error: true,
                  mailSent: resultJson.sent,
                  errorMessage: resultJson.message
              });
            }
        })
      .catch(error => this.setState({
          errorMessage: error.message,
          error: true
      }));
  };

    render() {
        return (
            <Fragment>
                <main className="bg-contact">
                    <PageTitle title="Contact" divider="divider-white" />
                    <div className="contact-container">
                        <section className="form-container">
                            <form action="">
                                <label>Nom
                                    <input id="name"
                                           name="name"
                                           type="text"
                                           placeholder="Entrer votre nom et prénom"
                                           value={this.state.name}
                                           onChange={ e => this.setState({ name: ""+e.target.value })} />
                                </label>
                                <label>Adresse mail
                                    <input id="email"
                                           name="email"
                                           type="email"
                                           placeholder="Entrer votre email"
                                           value={this.state.email}
                                           onChange={ e => this.setState({ email: ""+e.target.value })} />
                                </label>
                                <label>Message
                                    <textarea id="message"
                                              name="message"
                                              placeholder="Entrer votre message"
                                              value={ this.state.message }
                                              onChange={ e => this.setState({ message: ""+e.target.value }) } />
                                </label>
                                <input
                                    className="submit"
                                    type="submit"
                                    value="Envoyer"
                                    onClick={ e => this.handleFormSubmit(e) } />

                                    {/*Display if the mail is sent or not and why*/}
                                <div className='mail-answer'>
                                  { this.state.mailSent && <div className='success-message'> { this.state.successMessage } </div> }
                                  { this.state.error && <div className='error-message'> Erreur: { this.state.errorMessage } </div> }
                                </div>

                            </form>
                        </section>
                        <section className="info-container">
                            <ul>
                                <li><img src={mail} alt="mail"/> <p><a href="mailto:danielesnijers@gmail.com">  DanieleSnijers@gmail.com </a></p></li>
                                <li><img src={phone} alt="téléphone"/> <p><a href="tel:+32496868687"> 0496 / 86 86 87 </a></p></li>
                                <li><img src={map} alt="carte"/> <p> Avenue Eugène Mascaux 781, 6001, Marcinelle </p></li>
                                <li><img src={facebook} alt="facebook"/> <p><a href="https://www.facebook.com/artanddogs/">Art and Dogs</a> </p></li>

                            </ul>
                        </section>
                    </div>
                </main>
                <section>
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.113816295115!2d4.42704241584942!3d50.38307680009807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2242bfbc4217b%3A0xac93b985ef300a19!2sArt+and+Dogs!5e0!3m2!1sfr!2sbe!4v1566169711322!5m2!1sfr!2sbe"
                        title="map" width="100%" height="450" allowFullScreen />
                </section>
                <PushToTop />
            </Fragment>
        );
    }
}
