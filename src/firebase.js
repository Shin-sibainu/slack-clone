import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWqaSsnX1LVJS5LnfJILzkCK-JW6Mm4z8",
  authDomain: "react-slack-clone-f7fbe.firebaseapp.com",
  projectId: "react-slack-clone-f7fbe",
  storageBucket: "react-slack-clone-f7fbe.appspot.com",
  messagingSenderId: "197634527878",
  appId: "1:197634527878:web:37fd9d9a8a3e9bf2253707",
  measurementId: "G-QRQY5RQXPX",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
