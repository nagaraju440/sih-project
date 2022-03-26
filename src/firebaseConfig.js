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
  apiKey: "AIzaSyBYi9LfwbqUdX-uGdHkMuvR7Oo8992cmOA",
  authDomain: "sih-project1.firebaseapp.com",
  projectId: "sih-project1",
  storageBucket: "sih-project1.appspot.com",
  messagingSenderId: "676885111331",
  appId: "1:676885111331:web:2ce8075d7e1bc10fe4c796",
  measurementId: "G-HQHJ6R1KQM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
// const auth = firebase.auth()

export default db;