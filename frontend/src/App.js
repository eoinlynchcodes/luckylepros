import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BuyALepro from "./pages/BuyALepro";
import FAQ from "./pages/FAQ";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxW='container.lg'>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/buy" element={<BuyALepro />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
