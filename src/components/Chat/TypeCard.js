import React from "react";
import CameraIcon from "../../assets/Icons/cameraIcon.svg";
import SendIcon from "../../assets/Icons/sendIcon.svg";

function TypeCard() {
  return (
    <div className="typeMessageCard">
      <div className="typeMessageContainer">
        <input type="text" className="typeMessageInput" placeholder="Type your message here...!" />
        <img src={CameraIcon} alt="cameraIcon" />
      </div>
      <div className="typeMessageSendContainer">
        <img src={SendIcon} alt="send icon" />
      </div>
    </div>
  );
}

export default TypeCard;
