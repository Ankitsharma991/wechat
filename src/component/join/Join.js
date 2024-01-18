import React, { useState } from "react";
import "./join.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_chat.png";
import Icon from "../../assets/conversation.png";

const Join = () => {
  const [name, setName] = useState();
  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={Icon} alt="logo" />
        <h1>WECHAT-</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        />
        <Link
          onClick={(event) => (!name ? event.preventDefault() : null)}
          to="/chat"
        >
          {" "}
          <button className="joinbtn">Login In</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
