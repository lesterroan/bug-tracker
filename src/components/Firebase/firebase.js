// // import firebase from "firebase";
// import * as firebase from "firebase/app";
// import "firebase/auth";
// // import "firebase/auth";
// // using single config for both dev and production
// const config = {
//     apiKey: "AIzaSyASWKBFCampzlUWopP2v9RVbq_cP5feOzU",
//     authDomain: "bug-tracker-62493.firebaseapp.com",
//     databaseURL: "https://bug-tracker-62493.firebaseio.com",
//     projectId: "bug-tracker-62493",
//     storageBucket: "bug-tracker-62493.appspot.com",
//     messagingSenderId: "735423983275",
//     appId: "1:735423983275:web:95e0cc4d4007cdda4991ee",
//     measurementId: "G-BBP5L6Q1GD",
// };

// // class Firebase {
// //   constructor() {
// //     app.initializeApp(config);

// //     this.auth = app.auth();

// //     // doCreateUserWithEmailAndPassword = (email, password) =>
// //     //   this.auth.createUserWithEmailAndPassword(email, password);

// //     // doSignInWithEmailAndPassword = (email, password) =>
// //     //   this.auth.doSignInWithEmailAndPassword(email, password);

// //     // doSignOut = () => this.auth.signOut();

// //     // doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

// //     // doPasswordUpdate = (password) =>
// //     //   this.auth.currentUser.updatePassword(password);
// //   }
// // }

// // export default Firebase;

// const app = firebase.initializeApp(config);

// export default app;



//////////

import firebase from "firebase"

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

firebase.initializeApp(config);

export default firebase;

// firebase.js
// contains the Firebase context and provider

// import React, { createContext, useEffect } from 'react'
// import app from 'firebase/app'
// import 'firebase/database';
// import { useDispatch } from 'react-redux';

// // import { todoActions } from '../state/todos';

// const config = {
//     apiKey: "AIzaSyASWKBFCampzlUWopP2v9RVbq_cP5feOzU",
//     authDomain: "bug-tracker-62493.firebaseapp.com",
//     databaseURL: "https://bug-tracker-62493.firebaseio.com",
//     projectId: "bug-tracker-62493",
//     storageBucket: "bug-tracker-62493.appspot.com",
//     messagingSenderId: "735423983275",
//     appId: "1:735423983275:web:95e0cc4d4007cdda4991ee",
//     measurementId: "G-BBP5L6Q1GD",
// };





// const firebaseConfig = {
//     apiKey: "AIzaSyASWKBFCampzlUWopP2v9RVbq_cP5feOzU",
//     authDomain: "bug-tracker-62493.firebaseapp.com",
//     databaseURL: "https://bug-tracker-62493.firebaseio.com",
//     projectId: "bug-tracker-62493",
//     storageBucket: "bug-tracker-62493.appspot.com",
//     messagingSenderId: "735423983275",
//     appId: "1:735423983275:web:95e0cc4d4007cdda4991ee",
//     measurementId: "G-BBP5L6Q1GD",
// };

// // we create a React Context, for this to be accessible
// // from a component later
// const FirebaseContext = createContext(null)
// export { FirebaseContext }

// export default ({ children }) => {
//     let firebase = {
//         app: null,
//         database: null
//     }

//     const dispatch = useDispatch();

//     // check if firebase app has been initialized previously
//     // if not, initialize with the config we saved earlier
//     if (!app.apps.length) {
//         app.initializeApp(firebaseConfig);
//         firebase = {
//             app: app,
//             database: app.database(),

//             api: {
//                 getTodos
//             }
//         }
//     }

//     // function to query Todos from the database and
//     // fire a Redux action to update the items in real-time
//     function getTodos() {
//         firebase.database.ref('todos').on('value', (snapshot) => {
//             const vals = snapshot.val();
//             let _records = [];
//             for (var key in vals) {
//                 _records.push({
//                     ...vals[key],
//                     id: key
//                 });
//             }
//             // setTodos is a Redux action that would update the todo store
//             // to the _records payload
//             dispatch({ type: 'setTodos', payload: _records });
//         })
//     }

//     return (
//         <FirebaseContext.Provider value={firebase}>
//             {children}
//         </FirebaseContext.Provider>
//     )
// }