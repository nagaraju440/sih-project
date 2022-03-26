import React from "react";
import ChatIcon from "../../assets/Icons/sms.svg";
import CloseIcon from "../../assets/Icons/close.svg";
import DotIcon from "../../assets/Icons/dot.svg";

export default function NotificaitonCard() {
  return (
    <div className="notificaiton-card">
      <div className="notificaiton-card-header-section">
        <div className="notification-hearder-left-part">
          <img src={ChatIcon} className="notificaiton-chat-icon" />
          <div className="notificaiton-title-section">
            <div className="notification-status-section">
              <div className="notification-fromAddress-text">FROM_ADDRESS</div>
              <div className="notification-status">
                <img src={DotIcon} alt="nitification dot" /> <span>now</span>
              </div>
            </div>
            <div className="notification-title">Notification title</div>
          </div>
        </div>
        <img src={CloseIcon} className="notificaiton-cancel-icon" />
      </div>
      <div className="notification-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
        nobis commodi esse architecto quidem neque nesciunt odio corporis veniam
        delectus!
      </div>
    </div>
  );
}
