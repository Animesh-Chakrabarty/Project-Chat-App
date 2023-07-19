import { ChatContext } from "../context/ChatContext";

import React, { useContext } from "react";

const Chathead = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chatHead">
      <span>{data?.user?.displayName}</span>
    </div>
  );
};

export default Chathead;
