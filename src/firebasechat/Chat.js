import React, { useState, useEffect, useRef } from 'react'
import db from '../firebaseConfig.js'
import SendMessage from './SendMessage'
import SignOut from './SignOut'
import './chatstyles.css'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebase from 'firebase/compat/app';

// import { query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { collection, query, where, getDocs, orderBy, limit, onSnapshot, } from "firebase/firestore";
function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const [authUid, setAuthUid] = useState("")
    useEffect(async () => {
        let auth = getAuth();
        setAuthUid(auth.currentUser.uid)
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));

        const querySnapshot = await getDocs(q);
        setMessages(querySnapshot.forEach(doc => doc.data()))
        console.log("messages is ", messages);
        // querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     messages.push(doc.data())
        //     setMessages(messages)
        //     console.log("messages is ", messages);
        // });
        // const citiesRef = collection(db, "messages");
        // console.log("ciskjsdhfkjdsf", citiesRef);
        // const q = onSnapshot(query(citiesRef, orderBy("createdAt"), limit(50)), (doc) => {
        //     console.log("q data", doc.docs);
        //     setMessages(doc.docs.map(doc => doc.data()))
        //     console.log("messages in chat box", messages);

        // })

    }, [])
    return (
        <div style={{ backgroundColor: "red" }}>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (

                    <div>
                        <div key={id} className={`msg ${uid === authUid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
