import React from "react";
import './App.css';
import Navigation from "./NavBar/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/index';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />

        </Routes>
    </Router>
  );
}

export default App;
