import React from 'react'

const API_URL = "http://51.210.8.134:5000/"


const AppointmentItem = props => {
    const SMS_STRING = `sms://${props.phone};?&body=Salon Art and Dogs bonjour, je vous contacte suite à votre demande de rendez-vous effectuée le ${props.date} Je peux vous proposer le:   à   . Merci de me confirmer ou non votre présence. Une bonne journée.`
    const CALL_STRING = `tel:${props.phone}`

    const deleteAppointment = appointmentId => {
        fetch(API_URL + "appointment-delete", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ id: appointmentId }),
        })
            .then(result => result.json())
            .then(resultJson => {

            })
            .catch(err => console.log('error: ', err))
    }

    return (
        <div className="appointmentCard">
            <header>
                <time>{props.date}</time>
                <p>Status: <span className="statusBubble redBg" /> </p>
            </header>
            <main>
                <section className="cardSectionNames">
                    <ul>
                        <li>Client:</li>
                        <li>Chien:</li>
                        <li>Remarque du client:</li>
                        <li>Note:</li>
                    </ul>
                </section>
                <section className="cardSectionContent">
                    <ul>
                        <li>
                            <p className="bold">{props.clientName}</p>
                            <p><a
                                href={CALL_STRING}
                            >
                                {props.phone}
                            </a></p>
                        </li>
                        <li>
                            <p className="bold">{props.dogName}</p>
                            <p>{props.dogBreed}</p>
                        </li>
                        <li>
                            <p>{props.remarque}</p>
                        </li>
                        <li>
                            <p>{props.note}</p>
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <button className="redBg" onClick={() => deleteAppointment(props.id)}>
                    SUPPRIMER
                </button>
                <a href={SMS_STRING}>
                    <button className="blueBg">
                        SMS
                </button>
                </a>
                <button className="greenBg" onClick={() => deleteAppointment(props.id)}>
                    EN ATTENTE
                </button>
            </footer>
        </div >
    )
}

export default AppointmentItem