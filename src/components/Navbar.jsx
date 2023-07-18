import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">
      <img width="36" height="36" src="https://img.icons8.com/color/48/filled-chat.png" alt="filled-chat"/>
      </span>
    </div>
  );
};

export default Navbar;
