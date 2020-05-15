const formatDataForDb = (firstName, lastName, phone, dogName, dogBreed, remarque, isDataPolicyAccepted) => {
    if (
        firstName
        && firstName.length > 2
        && lastName
        && lastName.length > 2
        && phone
        && phone.length > 2
        && dogName
        && dogName.length > 2
        && dogBreed
        && dogBreed.length > 2
    ) {
        // Bad phone format
        let phoneRegex = /^((\+| 00)32\s?|0)4(\s?\d{2}){4}$/
        if (!phone.match(phoneRegex) || (phone.length !== 10 && phone !== 12)) {
            return { 'error': "Merci d'entrer un numéro de téléphone VALIDE et SANS ESPACES." }
        }
        // Data policy rejected
        if (!isDataPolicyAccepted) {
            return { 'error': "Merci d'accepter notre politique de confidentialité." }
        }
        if (
            firstName.length > 20
            && lastName.length > 20
            && phone.length > 12
            && dogName.length > 20
            && dogBreed.length > 130
        ) {
            return { 'error': "Merci de ne pas dépasser la taille maximum des champs." }
        }
        const date = new Date()

        const appointmentData = {
            firstName: firstName.trim().charAt(0).toUpperCase() + firstName.trim().toLocaleLowerCase().slice(1),
            lastName: lastName.trim().charAt(0).toUpperCase() + lastName.trim().toLocaleLowerCase().slice(1),
            phone: phone.trim(),
            dogName: dogName.trim().charAt(0).toUpperCase() + dogName.trim().toLocaleLowerCase().slice(1),
            dogBreed: dogBreed.trim().charAt(0).toUpperCase() + dogBreed.trim().toLocaleLowerCase().slice(1),
            remarque: remarque.trim(),
            formDate: String(date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()),
            isDataPolicyAccepted: isDataPolicyAccepted,
            appointmentProposal: '',
            status: 'todo',
            formatted: true,
        }
        return appointmentData

    } else {
        return { 'error': 'Merci de remplir TOUS les champs requis. (*)' }
    }
}

export default formatDataForDb