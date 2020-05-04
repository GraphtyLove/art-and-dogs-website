import React, { Fragment, useState } from 'react'
import PushToTop from "../PushToTop/PushToTop"
import AppointmentItem from "./AppointmentItem"
// Style:
import "./appointment.scss"

const activeSwitcher = {
    background: "white",
    fontWeight: "bold"
}


const Logged = props => {
    // State:
    const [switcher, setSwitcher] = useState("todo");

    return (
        <Fragment>
            <section className="switcherContainer">
                <button
                    className="switchButton switcherLeft"
                    onClick={() => setSwitcher("todo")}
                    style={switcher === 'todo' ? activeSwitcher : null}
                >
                    A contacter
                </button>
                <button
                    className="switchButton switcherRight"
                    onClick={() => setSwitcher("waiting")}
                    style={switcher === 'waiting' ? activeSwitcher : null}
                >
                    En attente
                    </button>
            </section>

            {props.appointmentList
                && props.appointmentList.length > 0
                && props.appointmentList.map(appointment => <AppointmentItem
                    key={appointment._id.$oid}
                    id={appointment._id.$oid}
                    date={appointment.date}
                    clientName={appointment.firstName + ' ' + appointment.lastName}
                    phone={appointment.phone}
                    dogName={appointment.dogName}
                    dogBreed={appointment.dogBreed}
                    status={appointment.status}
                    remarque={appointment.remarque}
                    note={appointment.note}
                />)
            }
            {props.appointmentList.length === 0 && <p>Pas de rendez-vous en attente!</p>}
            <PushToTop />
        </Fragment>
    )
}

export default Logged