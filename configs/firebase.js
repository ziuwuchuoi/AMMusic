// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtWPVTPqgBiu4pAkmuzCk6dx9txEBvbnU",
  authDomain: "ammusic-f9362.firebaseapp.com",
  projectId: "ammusic-f9362",
  storageBucket: "ammusic-f9362.appspot.com",
  messagingSenderId: "16719729848",
  appId: "1:16719729848:web:2ba4aa224aa68d8a83d04d",
  measurementId: "G-NWXECD50FE"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}