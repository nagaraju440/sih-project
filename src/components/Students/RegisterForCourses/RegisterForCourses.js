import React, { useEffect } from "react";
import "../RegisterForCourses/RegisterForCourses.css";
import img1 from "../../../assets/Images/Courses.png";
import HeartIcon from "../../../assets/Icons/heart.svg";
import star from "../../../assets/Icons/Star.svg";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import db from "../../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
export default function RegisterForCourses(props) {
  const [details, setDetails] = useState({});
  const y = [];
  const auth = getAuth();
  useEffect(async () => {
    const test = await getDocs(
      collection(db, "colleges", props.collegeName, "courses")
    );
    test.forEach((doc) => {
      y.push(doc.data());
      try {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          console.log(user.uid, user.email);
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    });
    setDetails(y);
    console.log(details, "dhgSJ");
  }, []);
  const AddData = (e) => {
    console.log(e, "wohoooo");
    try {
      const auth = getAuth();
      onAuthStateChanged(auth,user =>{
        console.log(user.uid,user.email)
      addDoc(collection(db,"colleges",props.collegeName,"students",user.uid,"courses"),{
        Category:e.Category,
        Language:e.Language,
        Standard:e.Standard,
        Link:e.Link,
        Title:e.Title,
        Projects:e.Projects,
        Schedule:e.Schedule,
        uid:e.uid
      })
    })
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {console.log(props.collegeName, props.userUid, details, "./././.")}
      {Object.values(details).map((c, p) => {
        return (
          <div key={p} className="card1">
            <div className="Card1_image">
              <img src={img1}></img>
            </div>
            <div className="Card1_Header">
              <div className="Card1_Headertext"> {c.Title}</div>
              <div className="Card1_Headericon">
                <img
                  src={HeartIcon}
                  style={{ width: "30px", height: "20px" }}
                ></img>
              </div>
            </div>
            <div className="Card1_secondparttext">{c.uid}</div>
            <div className="Card1_thirdparttext">
              <div className="Card1_days">• 7days</div>
              <div className="Card1_time">• 5pm to 7 pm</div>
            </div>
            <div className="Card1_button">
              <div>
                <button className="Card1_Register" onClick={() => AddData(c)}>
                  Register Now
                </button>
              </div>
              <div className="Card1_Rating">
                <div className="Card1_ratingtext">4</div>
                <div className="Card1_ratingicon">
                  <img src={star} style={{ width: "20px", height: "20px" }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
