import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
// import TombolGantibahasa from "./components/TombolGantiBahasa/TombolGantibahasa";
import { useState } from "react";
import { NavContext } from "../src/context/NavContext";
import Nav from "./components/Nav/Nav";

function App() {
  let [bahasa, setBahasa] = useState("en");
  return (
    <div className="App">
      <NavContext.Provider
        value={{
          lang: bahasa,
          onchangeBahasa: setBahasa,
        }}
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </NavContext.Provider>
    </div>
  );
}

export default App;
