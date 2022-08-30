import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import { AppContext } from "./context/AppContext";
import { useState } from "react";

function App() {
  let [bahasa, setBahasa] = useState("en");
  return (
    <AppContext.Provider
      value={{
        lang: bahasa,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <div style={{ textAlign: "center" }}>
          <button id="btn" onClick={() => setBahasa(bahasa === "en" ? "id" : "en")}>
            Ganti Bahasa
          </button>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
