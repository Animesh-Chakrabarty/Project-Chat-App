import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import Chathead from "./Chathead";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatIcons">
          <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={() => signOut(auth)}>Logout</button>
          </div>
        </div>
      </div>
      <Chathead />
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
