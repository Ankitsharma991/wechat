import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join.js";
import "./App.css";
import Chat from "./component/chat/Chat.js";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact Component={Join} />
          <Route path="/chat" exact Component={Chat} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
