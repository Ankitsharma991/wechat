import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/join/Join.js";
import "./App.css";
import Chat from "./component/chat/Chat.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact Component={Join} />
          <Route path="/chat" exact Component={Chat} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
