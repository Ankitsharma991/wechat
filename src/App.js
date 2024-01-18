import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/join/Join.js";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact Component={Join} />
          <Route path="/chat" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
