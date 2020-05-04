import React, { Fragment, useState } from 'react'
import PushToTop from "../PushToTop/PushToTop"
import PageTitle from "../PageTitle/PageTitle"
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
            <PageTitle title="Mes rendez-vous" divider="divider-black" />

            <section >
                <button sty
                    className="switcherContainer switcherLeft"
                    onClick={() => setSwitcher("todo")}
                    style={switcher === 'todo' ? activeSwitcher : null}
                >
                    A contacter
                </button>
                <button
                    className="switcherContainer switcherRight"
                    onClick={() => setSwitcher("waiting")}
                    style={switcher === 'waiting' ? activeSwitcher : null}
                >
                    En attente
                    </button>
            </section>

            {props.appointmentList
                && props.appointmentList.length > 0
                && props.appointmentList.map(appointment => <AppointmentItem
                    key={appointment.id}
                    clientName={appointment.firstName + ' ' + appointment.lastName}
                    phone={appointment.phone}
                    dogName={appointment.dogName}
                    dogBreed={appointment.dogBreed}
                    status={appointment.status}
                    note={appointment.note}
                />)
            }
            {props.appointmentList.length === 0 && <p>Pas de rendez-vous en attente!</p>}
            <PushToTop />
        </Fragment>
    )
}

export default Logged