import app from "firebase/app";
// import "firebase/auth";
// using single config for both dev and production
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

class Firebase {
  constructor() {
    app.initializeApp();

    // this.auth = app.auth();

    //   doCreateUserWithEmailAndPassword = (email, password) =>
    //     this.auth.createUserWithEmailAndPassword(email, password);

    //   doSignInWithEmailAndPassword = (email, password) =>
    //     this.auth.doSignInWithEmailAndPassword(email, password);

    //   doSignOut = () => this.auth.signOut();

    //   doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

    //   doPasswordUpdate = (password) =>
    //     this.auth.currentUser.updatePassword(password);
  }
}

export default Firebase;
