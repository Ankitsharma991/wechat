import React, { useState } from "react";
import "./join.css";
import { Link } from "react-router-dom";
import Icon from "../../assets/conversation.png";

let user;

const Join = () => {
  const [name, setName] = useState();

  const sendUser = () => {
    user = document.getElementById("joinInput").value;
    document.getElementById("joinInput").value = "";
  };

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={Icon} alt="logo" />
        <h1>WE~CHAT</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
          type="text"
          id="joinInput"
        />
        <Link
          to="/chat"
          onClick={(event) => (!name ? event.preventDefault() : null)}
        >
          {" "}
          <button className="joinbtn" onClick={sendUser}>
            Login In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;

export { user };
