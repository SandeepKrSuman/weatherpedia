import React from 'react';
import HomePage from "./HomePage";
import Weather from "./Weather";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component = {HomePage} />
        <Route path="/weather" exact component = {Weather} />
      </div>
    </Router>
  );
}

export default App;
