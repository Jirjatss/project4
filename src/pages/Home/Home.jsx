import React from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import "../../components/Header/Header.css";
import gambar from "../../assets/Sajad.jpg";
import "./Home.css";
import { AppContext } from "../../context/AppContext";

function Home() {
  const context = React.useContext(AppContext);
  return (
    <>
      <Nav />
      <Header id={context.lang === "en" ? "Home" : "Beranda"} />
      <section className="jumbotron text-center">
        <img src={gambar} alt="" className="rounded-circle img-thumbnail" style={{ width: "20rem" }} />
        <h2 className="display-4">M Hijir Sajad</h2>
        <h5 className="lead">Member of Kind Knucker</h5>
      </section>
    </>
  );
}

export default Home;
