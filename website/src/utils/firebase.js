import firebase from 'firebase'
// DO NOT COMMIT FIREBASE KEY AND DATA HERE !!!
// TODO: change that hard code to .env
const firebaseConfig = {
    apiKey: "AIzaSyD48uP1p2UYI_oakLDS_DsRZtXjq2ZwhA8",
    authDomain: "art-and-dogs-rdv.firebaseapp.com",
    databaseURL: "https://art-and-dogs-rdv.firebaseio.com",
    projectId: "art-and-dogs-rdv",
    storageBucket: "art-and-dogs-rdv.appspot.com",
    messagingSenderId: "988460592091",
    appId: "1:988460592091:web:358db0618a135cf8b255fe",
    measurementId: "G-8WXVTTWP8E"
}
firebase.initializeApp(firebaseConfig);
export default firebase