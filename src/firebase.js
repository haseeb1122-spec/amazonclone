import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe_IcSW7vaLGvKvVE4FU8CI4le-BUBq4o",
  authDomain: "clone-ec084.firebaseapp.com",
  projectId: "clone-ec084",
  storageBucket: "clone-ec084.appspot.com",
  messagingSenderId: "439656751970",
  appId: "1:439656751970:web:2977cb60d862335cb8823b",
  measurementId: "G-FEDTSGVTLY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };