import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpSy0tYPGvgbxN2_pjDxcTpZWHQre0SpE",
  authDomain: "the-local-store-e40b7.firebaseapp.com",
  databaseURL: "https://the-local-store-e40b7-default-rtdb.firebaseio.com",
  projectId: "the-local-store-e40b7",
  storageBucket: "the-local-store-e40b7.appspot.com",
  messagingSenderId: "615045578084",
  appId: "1:615045578084:web:a659a58aed31ce05198e71",
  measurementId: "G-B6MT7JHQWV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
