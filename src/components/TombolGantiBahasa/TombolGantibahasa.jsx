import React from "react";
import { useState } from "react";
import { NavContext } from "../../context/NavContext";

function TombolGantibahasa() {
  let [bahasa, setBahasa] = useState("en");
  return (
    <NavContext.Provider
      value={{
        lang: bahasa,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <button id="btn" onClick={() => setBahasa(bahasa === "en" ? "id" : "en")}>
          Ganti Bahasa
        </button>
      </div>
    </NavContext.Provider>
  );
}

export default TombolGantibahasa;
