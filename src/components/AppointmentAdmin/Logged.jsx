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

    const appointmentStatusTodo = props.appointmentList.filter(appointment => appointment.status === 'todo')
    const appointmentStatusWaiting = props.appointmentList.filter(appointment => appointment.status === 'waiting')

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
                && switcher === "todo"
                && appointmentStatusTodo.map(appointment => <AppointmentItem
                    key={appointment._id.$oid}
                    id={appointment._id.$oid}
                    date={appointment.date}
                    firstName={appointment.firstName}
                    lastName={appointment.lastName}
                    phone={appointment.phone}
                    dogName={appointment.dogName}
                    dogBreed={appointment.dogBreed}
                    status={appointment.status}
                    remarque={appointment.remarque}
                    note={appointment.note}
                    fetchFunction={props.fetchFunction}
                    switcher={switcher}
                />)
            }
            {props.appointmentList
                && props.appointmentList.length > 0
                && switcher === "waiting"
                && appointmentStatusWaiting.map(appointment => <AppointmentItem
                    key={appointment._id.$oid}
                    id={appointment._id.$oid}
                    date={appointment.date}
                    firstName={appointment.firstName}
                    lastName={appointment.lastName}
                    phone={appointment.phone}
                    dogName={appointment.dogName}
                    dogBreed={appointment.dogBreed}
                    status={appointment.status}
                    remarque={appointment.remarque}
                    note={appointment.note}
                    fetchFunction={props.fetchFunction}
                    switcher={switcher}
                />)
            }
            {switcher === "todo" && appointmentStatusTodo.length === 0 && <p className="empty">Pas de client à contacter! <span role="img" aria-label="clap Emojis">👏🏽</span></p>}
            {switcher === "waiting" && appointmentStatusWaiting.length === 0 && <p className="empty">Pas de rendez-vous en attente! <span role="img" aria-label="clap Emojis">👏🏽</span></p>}
            <PushToTop />
        </Fragment>
    )
}

export default Logged