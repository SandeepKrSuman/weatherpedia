import React from "react";
import HomePage from "./HomePage";
import Weather from "./Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/weather" exact element={<Weather />} />
      </Routes>
    </Router>
  );
}

export default App;
