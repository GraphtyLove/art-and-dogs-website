import React, { useState } from 'react'
import MaterialIcon from 'material-icons-react'

const API_URL = "http://51.210.8.134/"


const AppointmentItem = props => {

    const [note, setNote] = useState(props.note)
    const [isEditing, setIsEditing] = useState(false)
    const [appointmentDay, setAppointmentDay] = useState("")
    const [appointmentMonth, setAppointmentMonth] = useState("")
    const [appointmentHour, setAppointmentHour] = useState("")
    const [appointmentMinute, setAppointmentMinute] = useState("")


    const handleChangeInput = (e, inputName) => {
        const maxInputValue = 2
        const value = e.target.value
        let nextInput = ''

        if (inputName === 'appointmentDay') {
            setAppointmentDay(value)
            nextInput = 'appointmentMonth'
        } else if (inputName === "appointmentMonth") {
            setAppointmentMonth(value)
            nextInput = 'appointmentHour'
        } else if (inputName === "appointmentHour") {
            setAppointmentHour(value)
            nextInput = 'appointmentMinute'
        } else if (inputName === "appointmentMinute") {
            setAppointmentMinute(value)
            nextInput = null
        }

        if (value.length >= maxInputValue && nextInput) {
            document.getElementById(nextInput).focus()
        }
    }

    const SMS_STRING = `sms://${props.phone}?&body=Salon Art and Dogs bonjour, je vous contacte suite à votre demande de rendez-vous effectuée le ${props.date}. Je peux vous proposer le: ${appointmentDay}/${appointmentMonth} à ${appointmentHour}h${appointmentMinute}. Merci de me confirmer ou non votre présence. Une bonne journée.`
    const CALL_STRING = `tel:${props.phone}`

    let appointmentData = {
        id: props.id,
        date: props.date,
        firstName: props.firstName,
        lastName: props.lastName,
        phone: props.phone,
        dogName: props.dogName,
        dogBreed: props.dogBreed,
        remarque: props.remarque,
        note: note,
        status: props.status,
    }

    // fetch functions
    const appointmentDelete = appointmentId => {
        fetch(API_URL + "appointment-delete", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ id: appointmentId }),
        })
            .then(result => result.json())
            .then(resultJson => {
                const userData = JSON.parse(window.localStorage.getItem('aadLogin'))
                resultJson.success && props.fetchFunction(userData.userName, userData.password)
            })
            .catch(err => console.log('error: ', err))
    }
    const appointmentStatusInvert = appointmentData => {
        fetch(API_URL + "appointment-status-invert", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(appointmentData),
        })
            .then(result => result.json())
            .then(resultJson => {
                console.log("send")
                const userData = JSON.parse(window.localStorage.getItem('aadLogin'))
                resultJson.success && props.fetchFunction(userData.userName, userData.password)
            })
            .catch(err => console.log('error: ', err))
    }
    const appointmentUpdate = appointmentData => {
        fetch(API_URL + "appointment-update", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(appointmentData),
        })
            .then(result => result.json())
            .then(resultJson => {
                const userData = JSON.parse(window.localStorage.getItem('aadLogin'))
                resultJson.success && props.fetchFunction(userData.userName, userData.password)
            })
            .catch(err => console.log('error: ', err))
    }

    return (
        <div className="appointmentCard">
            <header>
                <time>{props.date}</time>
                <p>
                    Status:
                    <span
                        className="statusBubble"
                        style={
                            props.status === 'todo'
                                ? { background: '#D00000' }
                                : { background: '#5ccb5c' }
                        }
                    />
                </p>
            </header>
            <main>
                <section className="cardSectionNames">
                    <ul>
                        <li>Client:</li>
                        <li>Chien:</li>
                        <li>
                            Remarque <br />
                            du client:
                        </li>
                        <li>Note:</li>
                        <li>Rendez-vous:</li>
                    </ul>
                </section>
                <section className="cardSectionContent">
                    <ul>
                        <li>
                            <p className="bold">{props.firstName} {props.lastName}</p>
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
                        <li className="note">
                            {isEditing
                                ? <input
                                    type="text"
                                    value={note}
                                    onChange={e => setNote(e.target.value)}
                                />
                                : <p className="noteContent">{note}</p>}
                            {isEditing
                                ? <button onClick={() => {
                                    setIsEditing(!isEditing)
                                    appointmentUpdate(appointmentData)
                                }}><MaterialIcon icon="done" color="green" /></button>
                                : <button onClick={() => setIsEditing(!isEditing)}> <MaterialIcon icon="edit" color="#00a2f7" /></button>}
                        </li>
                        <li style={{ flexDirection: 'row', width: '100%' }} >

                            <input pattern="[0-3][0-9]+" selectTextOnFocus={true} id="appointmentDay" value={appointmentDay} maxLength="2" onChange={e => handleChangeInput(e, 'appointmentDay')} className="appointmentTime" type="text" />
                            /
                            <input pattern="[0-1][0-9]" selectTextOnFocus={true} id="appointmentMonth" value={appointmentMonth} maxLength="2" onChange={e => handleChangeInput(e, 'appointmentMonth')} className="appointmentTime" type="text" />
                            à
                            <input pattern="[0-2][0-9]" selectTextOnFocus={true} id="appointmentHour" value={appointmentHour} maxLength="2" onChange={e => handleChangeInput(e, 'appointmentHour')} className="appointmentTime" type="text" />
                            h
                            <input pattern="[0-5][0-9]" selectTextOnFocus={true} id="appointmentMinute" value={appointmentMinute} maxLength="2" onChange={e => handleChangeInput(e, 'appointmentMinute')} className="appointmentTime" type="text" />
                        </li>
                    </ul>
                </section>
            </main>
            <footer>
                <button className="redBg" onClick={() => appointmentDelete(props.id)}>
                    SUPPRIMER
                </button>
                <a href={SMS_STRING}>
                    <button className="blueBg sms">SMS</button>
                </a>
                <button className="greenBg" onClick={() => appointmentStatusInvert(appointmentData)}>
                    {props.switcher === 'todo' && "EN ATTENTE"}
                    {props.switcher === 'waiting' && "A CONTACTER"}
                </button>
            </footer>
        </div >
    )
}

export default AppointmentItem