import React, { Fragment, useState } from 'react'

// Components
import PageTitle from "../PageTitle/PageTitle"
import Logged from "./Logged"
import NotLogged from "./NotLogged"

const API_PATH = "http://51.210.8.134:5000/appointment-admin"

const AppointmentAdmin = () => {
    // State
    const [appointmentList, setAppointmentList] = useState(null)
    const [loginError, setLoginError] = useState("")
    // API fetch:
    const sendUserToApi = (userName, password) => {
        fetch(`${API_PATH}`, {
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
                resultJson.error
                    ? setLoginError(resultJson.error)
                    : setAppointmentList(resultJson)
            })
            .catch(() => setLoginError("Erreur interne du serveur. Veuillez réessayer plus tard."))
    }

    return (
        <Fragment>
            <main className="bg-contact" style={{ height: "100vh" }}>
                <PageTitle title="Mes rendez-vous" divider="divider-colored" />
                {appointmentList !== null
                    ? <Logged appointmentList={appointmentList} />
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