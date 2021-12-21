import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BuyALepro from "./pages/BuyALepro";
import FAQ from "./pages/FAQ";
import Team from './pages/Team';
import Footer from './components/Footer';
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container maxW='container.xl' >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/buy" element={<BuyALepro />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/team" element={<Team/>} />
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
