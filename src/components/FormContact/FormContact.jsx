import React from "react";
import "./FormContact.css";
import { useState } from "react";

function FormContact() {
  const [nama, setName] = useState("");

  const [listnama, setListNama] = useState([]);

  const inputHandle = (e) => {
    setName(e.target.value);
  };
  const buttonHandle = (e) => {
    e.preventDefault();

    setListNama([...listnama, nama]);
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Masukan Nama Anda </label>
          <input type="text" className="form-control" onChange={(e) => inputHandle(e)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Saran</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3" style={{ textAlign: "center" }}>
          {listnama.map((nama) => (
            <h5>Terimakasih kak {nama} Atas Sarannya</h5>
          ))}
        </div>
        <button type="submit" class="btn btn-primary" onClick={(e) => buttonHandle(e)}>
          Submit
        </button>
      </form>
    </>
  );
}

export default FormContact;
