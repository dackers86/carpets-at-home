import firebase from 'firebase'

try {
    firebase.initializeApp({
        apiKey: "AIzaSyBSMhjQDC1c9lm57SYHn5Q4tZ5kl_zQyTo",
        authDomain: "carpets-at-home.firebaseapp.com",
        databaseURL: "https://carpets-at-home.firebaseio.com",
        storageBucket: "carpets-at-home.appspot.com",
        messagingSenderId: "815625748160",
    })
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

let db = {}


export default db