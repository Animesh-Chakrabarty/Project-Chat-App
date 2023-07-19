/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
      </div>
      <div className="messageContent">
        <div>
          {message.text && <p className="text">{message.text} </p>}
          {message.time && <p className="time">{message.time}</p>}
        </div>

        {message.img && <img src={message.img} alt="image" />}
      </div>
    </div>
  );
};

export default Message;
