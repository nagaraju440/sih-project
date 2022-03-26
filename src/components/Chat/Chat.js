import React from "react";
import ChatCard1 from "./ChatCard1";
import "./Chat.css";
import ChatCard2 from "./ChatCard2";
import TypeCard from "./TypeCard";
import { Input, AutoComplete } from 'antd';
import { useEffect, useState } from "react";


function Chat() {
  const { sender, setsender } = useState();


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
        <div className="chatSection-header"><ChatCard2 /></div>
        <div className="chatSection-body">
          djfadshfkajldfhakjlhdlkj
        </div>
        <div className="chatSection-footer"><TypeCard /></div>
        
      </div>
    </div>
  );
}

export default Chat;
