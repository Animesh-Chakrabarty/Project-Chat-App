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
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Chat = () => {
  const { data , dispatch} = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const logOut = () => {
    signOut(auth);
    // console.log(data);
    dispatch({ type: "CHANGE_USER", payload: {} });
    // console.log(data);
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatIcons">
          <div className="user">
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
            <button onClick={logOut}>
              <ExitToAppIcon style={{ fontSize: "2rem", color: "#2196F3" }} />
            </button>
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
