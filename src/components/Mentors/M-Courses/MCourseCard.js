import React from "react";
import pythonImg from "../../../assets/Images/pythonLaguageImg.png";
import HeartIcon from "../../../assets/Icons/heart.svg";

export default function MCourseCard(props) {
  return (
    <div className="MCourseCard">
      {console.log(props,"course card")}
      <img src={pythonImg} alt=""  />
      <div className="MCourseCardDescription">
        <p style={{ fontSize: 18 }}>
          Enroled Students <span style={{ fontWeight: 500 }}>15</span>
        </p>
        <div className="MCourseCardLikesContainer">
          <img src={HeartIcon} alt="like icon" />
          <p className="MCourseCardLikes">12</p>
        </div>
      </div>
    </div>
  );
}
