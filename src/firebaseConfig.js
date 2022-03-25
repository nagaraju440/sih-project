import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtoi1x5NNPcxEcvjLDmbyhVsnptErclfI",
  authDomain: "sih-project-b9fde.firebaseapp.com",
  projectId: "sih-project-b9fde",
  storageBucket: "sih-project-b9fde.appspot.com",
  messagingSenderId: "421577513126",
  appId: "1:421577513126:web:966ebd12cf152c6006fc67",
  measurementId: "G-FVD2WKF1WR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
// const auth = firebase.auth()

export default db;