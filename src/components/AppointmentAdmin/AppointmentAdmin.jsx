import React, { Fragment, useState } from 'react'

// Components
import PageTitle from "../PageTitle/PageTitle"
import Logged from "./Logged"
import NotLogged from "./NotLogged"

const API_PATH = "http://51.210.8.134/"

// TODO: Add media queries for responsivity ❌


const AppointmentAdmin = () => {
    // State
    const [appointmentList, setAppointmentList] = useState(null)
    const [loginError, setLoginError] = useState("")

    // API fetch:
    const sendUserToApi = (userName, password) => {
        fetch(API_PATH + "appointment-admin", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                userName: userName,
                password: password
            }),
        })
            .then(result => result.json())
            .then(resultJson => {
                console.log('result', resultJson)
                if (resultJson.error) {
                    setLoginError(resultJson.error)
                } else {
                    setAppointmentList(resultJson)
                    document.cookie = `username=${userName};`
                    document.cookie = `password=${password}`
                    console.log("cookies: ", document.cookie)
                }
            })
            .catch(() => setLoginError("Erreur interne du serveur. Veuillez réessayer plus tard."))
    }

    return (
        <Fragment>
            <main className="bg-contact flex-center" style={{ minHeight: "100vh" }}>
                <PageTitle title="Mes rendez-vous" divider="divider-black" />
                {appointmentList !== null
                    ? <Logged
                        appointmentList={appointmentList}
                        fetchFunction={sendUserToApi}
                    />
                    : <NotLogged
                        loggingFunction={sendUserToApi}
                        loginError={loginError}
                    />
                }
            </main>
        </Fragment>
    )
}

export default AppointmentAdmin