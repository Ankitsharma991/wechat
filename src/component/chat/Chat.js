import React, { useEffect, useState } from "react";
import "./Chat.css";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { user } from "../join/Join";
import { AiOutlineClose } from "react-icons/ai";
import { LuSendHorizonal } from "react-icons/lu";
import socketIO from "socket.io-client";
import { toast } from "react-toastify";

const ENDPOINT = "http://localhost:5000/";
let socket;
const Chat = () => {
  const [id, setId] = useState("");
  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };
  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
        setId(socket.id);
        toast.warn("connected!!");
    });

    socket.emit("joined", { user });
    socket.on("welcome", (data) => {
      toast.success(data.message);
    });

    socket.on("userJoined", (data) => {
      toast.info(data.message);
      console.log(data.message);
    });

    socket.on("leave", (data) => {
      toast.warn(data.message);
    });

    return () => {
      socket.emit("dismiss");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      console.log(data.user, data.message, data.id);
      //   toast.success(data.user, "\n", data.message, "\n", data.id);
    });
  }, []);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h2>WE-CHAT</h2>
          <a href="/">
            {" "}
            <AiOutlineClose className="sImg" size={35} color="white" />
          </a>
        </div>
        <ReactScrollToBottom className="chatBox"></ReactScrollToBottom>
        <div className="inputBox">
          <input type="text" id="chatInput" />
          <button className="sendBtn" onClick={send}>
            <LuSendHorizonal size={35} color="white" className="s2Img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
