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
    var [messages, setMessages] = useState([])
    var [msgsData,setMsgsData]=useState([])
    var [authUid, setAuthUid] = useState("")
    useEffect(async () => {
        let auth = getAuth();
        authUid=auth.currentUser.uid
        setAuthUid(authUid)
        const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
        const querySnapshot = await getDocs(q)
        setMessages(querySnapshot.docs.map(doc => doc.data()))
        // querySnapshot.forEach(async(doc) => {
        //     // console.log("doc data",doc.data());
        //     await messages.push(doc.data())
        //     await setMessages(messages)
        //     console.log("messages is ", messages);
            
        // });
    // msgsData=messages
    //     setMsgsData(messages)
    //     msgsData.map((l,i)=>{
    //         console.log("msgsDaat in map function",l,i)
    //     })
     

    })
    return (
        <div >
            helllloooo
            <SignOut />
            <div className="msgs">
                {/* <p>1232132dd1df{JSON.stringify(msgsData)}</p> */}

                {messages.map(({ id, text, photoURL, uid }) =>{ 
                    return(
                        <div key={id}  className={`msg ${uid === authUid ? 'sent' : 'received'}`}>
                    <div>
                            {/* <p>123</p> */}
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                    )
                    })}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
