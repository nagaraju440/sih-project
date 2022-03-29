import React,{useState,useEffect} from "react";
import pythonImg from "../../../assets/Images/pythonLaguageImg.png";
import HeartIcon from "../../../assets/Icons/heart.svg";

export default function MCourseCard(props) {
  const [students,setStudents]=useState([])
  useEffect(() => {
    setStudents(props.courseData.data.students)
  }, [])
  // console.log("props is ",props.courseData.data.students)
  return (
    <div className="MCourseCard">
      {/* {console.log(props,"course card")} */}
      <img src={pythonImg} alt=""  />
      <div className="MCourseCardDescription">
        <p style={{ fontSize: 18 }}>
          Enroled Students <span style={{ fontWeight: 500 }}>{students.length}</span>
        </p>
        <div className="MCourseCardLikesContainer">
          <img src={HeartIcon} alt="like icon" />
          <p className="MCourseCardLikes">12</p>
        </div>
      </div>
    </div>
  );
}
