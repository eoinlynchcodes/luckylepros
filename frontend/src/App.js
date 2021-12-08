import React from 'react';
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
