const getUserNameAndPasswordFromCookies = () => {
    let userData = {
        userName: "",
        password: ""
    }

    const cookies = document.cookie.split(";")
    cookies.forEach(element => {
        let key = element.split("=")[0].replace(' ', '')
        let value = element.split("=")[1].replace(' ', '')
        if (key === 'username') {
            userData.userName = value
        } else if (key === 'password') {
            userData.password = value
        }
    })
    return userData
}

export default getUserNameAndPasswordFromCookies