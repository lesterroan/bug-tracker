
import * as firebase from "firebase";
// require('firebase/auth')

const config = {
    apiKey: "AIzaSyASWKBFCampzlUWopP2v9RVbq_cP5feOzU",
    authDomain: "bug-tracker-62493.firebaseapp.com",
    databaseURL: "https://bug-tracker-62493.firebaseio.com",
    projectId: "bug-tracker-62493",
    storageBucket: "bug-tracker-62493.appspot.com",
    messagingSenderId: "735423983275",
    appId: "1:735423983275:web:95e0cc4d4007cdda4991ee",
    measurementId: "G-BBP5L6Q1GD",
};
// import { FirebaseConfig } from "../config/keys";
//firebase.initializeApp(config);

// firebase.initializeApp(config);


export const app = firebase.initializeApp(config);
const databaseRef = firebase.database();
export const rootRef = firebase.firestore();   