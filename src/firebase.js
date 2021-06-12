import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyAzokLRs7_gb-7rxL21hAMOtr5It7yFz8Q',
    authDomain: 'tik-tok-clone-85389.firebaseapp.com',
    projectId: 'tik-tok-clone-85389',
    storageBucket: 'tik-tok-clone-85389.appspot.com',
    messagingSenderId: '531526019475',
    appId: '1:531526019475:web:cddef1190bdf05beaa6066',
    measurementId: 'G-0HR4TNPKEW'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
export default db
