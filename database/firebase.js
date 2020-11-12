import firebase from 'firebase/app'
import "firebase/firestore"
import 'firebase/auth'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCVmH57Kfv-67f5QQKOZMCfoTvVDcaot9k",
    authDomain: "mepromotes-46bec.firebaseapp.com",
    databaseURL: "https://mepromotes-46bec.firebaseio.com",
    projectId: "mepromotes-46bec",
    storageBucket: "mepromotes-46bec.appspot.com",
    messagingSenderId: "38970928608",
    appId: "1:38970928608:web:b926a8c55ca09f2a784f85"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage().ref();
export default firebaseApp;