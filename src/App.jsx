import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./shared/Navbar";
import Services from "./pages/Services";
import ProjectShow from "./pages/ProjectShow";
import Footer from "./shared/Footer";
import Contact from "./components/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  useEffect(() => {
    fetch("https://app.Virgil Africagroup.com/api/projects", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((data) => console.log(data));
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects/:name" element={<ProjectShow />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<PrivacyPolicy />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
