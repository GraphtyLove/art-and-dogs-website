import React from 'react'

const deleteAppointment = appointmentId => {
    console.log("deleting: ", appointmentId)
}

const AppointmentItem = props => {
    return (
        <div>
            <header>
                <time>{props.date}</time>
                <p>Status: <span /> </p>
            </header>
            <main>
                <ul>
                    <li>
                        <div>
                            Client:
                        </div>
                        <div>
                            <p>{props.clientName}</p>
                            <p>{props.phone}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            Chien:
                        </div>
                        <div>
                            <p>{props.dogName}</p>
                            <p>{props.dogBreed}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            Note:
                        </div>
                        <div>
                            <p>{props.note}</p>
                        </div>
                    </li>
                </ul>
                <button onClick={() => deleteAppointment(props.id)}>
                    SUPPRIMER
                </button>
            </main>
        </div>
    )
}

export default AppointmentItem