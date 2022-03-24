import React from "react";
import ProfileImage from "../../assets/Images/profileImgae.png";

export default function ChatCard1() {
  return (
    <div className="ChatCard">
      <div className="ChatCardInfo">
        <img src={ProfileImage} alt="" />
        <div className="ChatCardContent">
          <div className="ChatCardTitle">Html</div>
          <div className="ChatCardDes">hello Friend..!</div>
        </div>
      </div>
      <div className="ChatCardTimeAndDateSection">
        <div className="ChatCardDay">Yesterday</div>
        <div className="ChatCardTime">12:15</div>
      </div>
    </div>
  );
}
