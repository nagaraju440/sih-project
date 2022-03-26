import React ,{useEffect} from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, addDoc, getDoc } from "firebase/firestore";
import db from "../../../firebaseConfig";
export default function Profile(props) {
  const auth=getAuth()
  useEffect(async () => {
    const test = await getDoc(doc(db, "colleges",props.collegeName,"students",props.userUid));
    console.log("data of a student at profile page is",test.data())
  }, [])
  return (
    <div> Student Profile</div>
  )
  
}
