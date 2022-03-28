import React, { useState, useEffect } from 'react'
import CameraIcon from "../../assets/Icons/cameraIcon.svg";
import SendIcon from "../../assets/Icons/sendIcon.svg";
import db from '../../firebaseConfig'
// import firebase from 'firebase'
// import { Input, Button } from '@material-ui/core'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import firebase from 'firebase/compat/app';

function TypeCard({ scroll }) {
  const [msg, setMsg] = useState('')
    async function sendMessage(e) {
        e.preventDefault()
        var auth = getAuth();
        const { uid, photoURL } = auth.currentUser
        try {
            const test = await addDoc(
                collection(db, "messages"),
                {
                    text: msg,
                    photoURL: "https://png.pngtree.com/element_our/png_detail/20181229/vector-chat-icon-png_302635.jpg",
                    uid,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }
            ).then(()=>{
                console.log("data uploaded succesfully");
            })

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <form className="typeMessageCard" onSubmit={sendMessage}>
      <div className="typeMessageContainer">
       
        <input type="text" className="typeMessageInput" placeholder="Type your message here...!" value={msg} onChange={e => setMsg(e.target.value)} />
        <img src={CameraIcon} alt="cameraIcon" className='camera-icon' />
      </div>
      <button type='submit' className="typeMessageSendContainer" >
        <img src={SendIcon} alt="send icon" />
      </button>
    </form>
//     <div>
//     <form onSubmit={sendMessage}>
//         <div className="sendMsg" >
//             <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
//             <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '500px' }}  type="submit">Send</Button>
//         </div>
//     </form>
// </div>
  );
}

export default TypeCard;
