import React from "react";
import ProfileImage from "../../assets/Images/profileImgae.png";

export default function ChatCard2() {
  return (
    <div className="ChatCard2">
      <img src={ProfileImage} alt="" />
      <div className="ChatCardContent">
        <div className="ChatCardTitle">Html</div>
        <div className="ChatCardDes">hello Friend..!</div>
      </div>
    </div>
  );
}
