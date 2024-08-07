import React from "react";
import "./app.scss"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/home/Home";







function App() {
  return (
    <div className="App dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
