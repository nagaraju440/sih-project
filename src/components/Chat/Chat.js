import React from "react";
import ChatCard1 from "./ChatCard1";
import "./Chat.css";
import ChatCard2 from "./ChatCard2";

function Chat() {
  return (
    <div className="chatPage">
      <div className="ChatMenuContainer">
        <input type="search" />
        <div className="chatMenu">
          <ChatCard1 />
          <ChatCard1 />
          <ChatCard1 />
          <ChatCard1 />
          <ChatCard1 />
        </div>
      </div>
          <div className="chatSection">
              <ChatCard2/>
      </div>
    </div>
  );
}

export default Chat;
