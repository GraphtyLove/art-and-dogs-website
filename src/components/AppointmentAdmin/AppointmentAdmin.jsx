import React, { Fragment, useState } from 'react'

// Components
import PageTitle from "../PageTitle/PageTitle"
import Logged from "./Logged"
import NotLogged from "./NotLogged"

const API_PATH = "http://localhost/art-and-dogs/api/appointment-admin.php"

const AppointmentAdmin = () => {
    // State
    const [isLogged, setIsLogged] = useState(false)
    const [appointmentList, setAppointmentList] = useState([])
    // API fetch:
    const sendUserToApi = (userName, password) => {
        //TODO: send data to API and get appointment-list bac
        const loginData = {
            userName: userName,
            password: password
        }

        fetch(`${API_PATH}`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(loginData),
        })
            .then(result => result.json())
            .then(resultJson => {
                console.log('result', resultJson)
                setAppointmentList(resultJson.appointmentList)
                resultJson.logged ? setIsLogged(true) : setIsLogged(false)
            })
            .catch(err => console.log('error: ', err))
    }

    return (
        <Fragment>
            <PageTitle title="Mes rendez-vous" divider="divider-colored" />
            <main>
                {isLogged ? <Logged appointmentList={appointmentList} /> : <NotLogged loggingFunction={sendUserToApi} />}
            </main>
        </Fragment>
    )
}

export default AppointmentAdmin