import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from 'firebase/firestore/lite';
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
  appId: "1:421577513126:web:83aff3ee70c1031f06fc67",
  measurementId: "G-V8M5GB70PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;