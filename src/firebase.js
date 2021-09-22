import firebase from "firebase";
require("dotenv").config();

const firebaseConfig = {
	apiKey: `${process.env.REACT_APP_API_KEY}`,
	authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
	projectId: `${process.env.REACT_APP_PROJECT_ID}`,
	storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
	appId: `${process.env.REACT_APP_APP_ID}`,
};

// Connects the front-end to firebase(back-end)
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Getting access to the database
const db = firebaseApp.firestore();
// For the sign In
const auth = firebase.auth();
// To get the google authentication, add provider
const provider = new firebase.auth.GoogleAuthProvider();

// Exporting all
export { auth, provider, db };
