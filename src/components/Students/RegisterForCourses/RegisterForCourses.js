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
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import db from "../../../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
export default function RegisterForCourses(props) {
  // console.log("uid of a student is",props.userUid/)
  var [details, setDetails] = useState([]);
  var [studentCourseId, setStudentCourseId] = useState([]);
  const y = [];
  const auth = getAuth();
  useEffect(async () => {
    await getDocs(
      collection(
        db,
        "colleges",
        props.collegeName,
        "students",
        props.userUid,
        "courses"
      )
    ).then((e) => {
      studentCourseId = [];
      setStudentCourseId([]);
      e.forEach((doc) => {
        studentCourseId.push(doc.id);
        setStudentCourseId(studentCourseId);
        console.log("doc.id is", studentCourseId);
      });
    });
    const test = await getDocs(
      collection(db, "colleges", props.collegeName, "courses")
    );
    test.forEach(async (doc1) => {
      // const checkCourseInStudent
      // try {
      // await getDoc(doc(db,"colleges",props.collegeName,"students",props.userUid,"courses",doc1.id)).then((e)=>{
      //     //  console.log("course is already there",doc1.id,e.id,e.data())
      //      if(e.data()==undefined){
      y.push({ data: doc1.data(), courseId: doc1.id, mentorName: "Nagaraju" });

      //      }
      //    }).catch(e=>{
      //      console.log("course is not there",e)
      //    })
      // } catch (error) {
      //   console.log("some thing error in catch block")
      // }

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
    details = y;
    setDetails(details);
    console.log(details, "detaisl are", "dhgSJ", y, "is y");

    // ...............get student course uid isFinite.apply..................
  }, []);
  const AddData = async (e) => {
    console.log(e, "wohoooo");
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        console.log(user.uid, user.email);
        setDoc(
          doc(
            db,
            "colleges",
            props.collegeName,
            "students",
            user.uid,
            "courses",
            e.courseId
          ),
          {
            Category: e.data.Category,
            Language: e.data.Language,
            Standard: e.data.Standard,
            Link: e.data.Link,
            Title: e.data.Title,
            Projects: e.data.Projects,
            Schedule: e.data.Schedule,
            uid: e.data.uid,
            courseId: e.courseId,
          }
        ).then((e) => {
          // alert("succsessfully registered for course")
        });

        updateDoc(
          doc(db, "colleges", props.collegeName, "mentors", e.data.uid),
          {
            students: arrayUnion(user.uid),
          }
        ).then((e) => {});
        updateDoc(
          doc(db, "colleges", props.collegeName, "courses", e.courseId),
          {
            students: arrayUnion(user.uid),
          }
        ).then((e) => {
          alert(" succsesfully registered for course");
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {/* {console.log(props.collegeName, props.userUid, details, "./././.")} */}
      <div>
        <div className="rfc-container">
          {Object.values(details).map((c, p) => {
            console.log("c is", studentCourseId, c.courseId);

            if (studentCourseId.indexOf(c.courseId) === -1) {
              return (
                <div key={p} className="card1">
                  <div className="Card1_image">
                    <img src={img1}></img>
                  </div>
                  <div className="Card1_Header">
                    <div className="Card1_Headertext"> {c.data.Title}</div>
                    <div className="Card1_Headericon">
                      <img
                        src={HeartIcon}
                        style={{ width: "30px", height: "20px" }}
                      ></img>
                    </div>
                  </div>
                  <div className="Card1_secondparttext">{c.mentorName}</div>
                  <div className="Card1_thirdparttext">
                    <div className="Card1_days">• 7days</div>
                    <div className="Card1_time">• 5pm to 7 pm</div>
                  </div>
                  <div className="Card1_button">
                    <div>
                      <button
                        className="Card1_Register"
                        onClick={() => AddData(c)}
                      >
                        Register Now
                      </button>
                    </div>
                    <div className="Card1_Rating">
                      <div className="Card1_ratingtext">4</div>
                      <div className="Card1_ratingicon">
                        <img
                          src={star}
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
// {
//    studentCourseId.indexOf(c.courseId)?"":<div></div>
//           }
