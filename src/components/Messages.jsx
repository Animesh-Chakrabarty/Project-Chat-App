/* eslint-disable no-lone-blocks */
import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  var prev_date = -1;
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  // console.log(data);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data?.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data?.chatId]);

  // console.log(messages);

  return (
    <div className="messages">
      {messages?.map((m) => {
        var Flag = false;
        if (m.date !== prev_date) {
          Flag = true;
          prev_date = m.date;
        }
        return (
          <div>
            {
              Flag && <div className="dateDivider">
                <p>{m.month} {m.date}</p>
              </div>
            }
            <Message message={m} key={m.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
