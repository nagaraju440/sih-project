import React, { useState, useEffect, useRef } from "react";
import db from "../../firebaseConfig";
// import SendMessage from './SendMessage'
// import SignOut from './SignOut'
import "./chatstyles.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";

import ChatCard1 from "./ChatCard1";
import "./Chat.css";
import ChatCard2 from "./ChatCard2";
import TypeCard from "./TypeCard";
import { Input, AutoComplete } from "antd";
// import { useEffect, useState } from "react";

function Chat(props) {
  const scroll = useRef();
  var [messages, setMessages] = useState([]);
  var [msgsData, setMsgsData] = useState([]);
  var [authUid, setAuthUid] = useState("");
  var [mentorCourses, setMentorCourses] = useState([]);

  useEffect(async () => {
    let auth = getAuth();
    authUid = auth.currentUser.uid;
    console.log("currentuserdetails",props.userUid);
    setAuthUid(authUid);
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const querySnapshot = await getDocs(q);
    setMessages(querySnapshot.docs.map((doc) => doc.data()));

    const courseData = query(
      collection(db, "colleges",props.collegeName,"mentors",props.userUid,"courses"),
      orderBy("createdAt"),
      limit(50)
    );
    const querySnapshot1 = await getDocs(courseData);
    setMentorCourses(querySnapshot1.docs.map((doc) => doc.data()));
    console.log(mentorCourses);
  }, []);
  return (
    <div className="chatPage">
      <div className="ChatMenuContainer">
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          className="chat-searchBox"
          // options={options}
        >
          <Input.Search size="large" placeholder="input here" />
        </AutoComplete>
        <div className="chatMenu">
          <ChatCard1 />
          <ChatCard1 />
          <ChatCard1 />
          <ChatCard1 />
          <ChatCard1 />
        </div>
      </div>
      <div className="chatSection">
        <div className="chatSection-header">
          <ChatCard2 />
        </div>
        <div className="chatSection-body msgs">
          {messages.map(({ id, text, photoURL, uid }) => {
            return (
              <div>
                <div
                  key={id}
                  className={`msg ${uid === authUid ? "sent" : "received"}`}
                >
                  <img src={photoURL} alt="" className="chat-image" />
                  <p className="chat-text">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="chatSection-footer">
          <TypeCard scroll={scroll} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
