import React from 'react'

const deleteAppointment = appointmentId => {
    console.log("deleting: ", appointmentId)
}


const AppointmentItem = props => {
    const SMS_STRING = `sms://${props.phone};?&body=Salon Art and dogs bonjour, je vous contact suite à votre demande de rendez-vous effectuée le ${props.date} Je peux vous proposer le:   à   .Merci de me confirmer ou non votre présence. Une bonne journée.`
    return (
        <div className="appointmentCard">
            <header>
                {/* TODO: Add a real date in the DB/backend */}
                {/* <time>{props.date}</time> */}
                <time>18/04/2020</time>
                <p>Status: <span className="statusBubble redBg" /> </p>
            </header>
            <main>
                <section className="cardSectionNames">
                    <ul>
                        <li>Client:</li>
                        <li>Chien:</li>
                        <li>Note:</li>
                    </ul>
                </section>
                <section className="cardSectionContent">
                    <ul>
                        <li>
                            <p className="bold">{props.clientName}</p>
                            <p><a
                                href={SMS_STRING}
                            >
                                {props.phone}
                            </a></p>
                        </li>
                        <li>
                            <p className="bold">{props.dogName}</p>
                            <p>{props.dogBreed}</p>
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
                <button className="greenBg" onClick={() => deleteAppointment(props.id)}>
                    EN ATTENTE
                </button>
            </footer>
        </div >
    )
}

export default AppointmentItem