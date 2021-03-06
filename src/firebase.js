// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyBig9IvmU16mMt-XgpLlpha3wdUan5YJvI",
	authDomain: "challenge-e4273.firebaseapp.com",
	databaseURL: "https://challenge-e4273.firebaseio.com",
	projectId: "challenge-e4273",
	storageBucket: "challenge-e4273.appspot.com",
	messagingSenderId: "854591056587",
	appId: "1:854591056587:web:5e07ebdc7a13f6af9bc94e",
	measurementId: "G-VTM88TCW4X",
};
// ////////1//////////
///////////////initialize app with firebase//////////////////
const firebaseApp = firebase.initializeApp(firebaseConfig);
//////////////databse///////////////////
const db = firebaseApp.firestore();
//////////////authentication/////////////
const auth = firebase.auth(); //give for signing in and all that

export { db, auth };
