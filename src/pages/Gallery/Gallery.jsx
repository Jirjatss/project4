import React from "react";
import CardGallery from "../../components/CardGallery/CardGallery";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import gambar1 from "../../assets/1.jpg";
import gambar2 from "../../assets/4.jpg";
import gambar3 from "../../assets/5.JPEG";
import { NavContext } from "../../context/NavContext";
// import "./Gallery.css";

function Gallery() {
  const context = React.useContext(NavContext);
  return (
    <>
      <Nav />
      <Header id={context.lang === "en" ? "Gallery" : "Galeri"} />
      <section class="page-section" id="Populer">
        <div class="container">
          <div class="row">
            <CardGallery gambar={gambar1} momen={"Bersama Keluarga"} />
            <CardGallery gambar={gambar2} momen={"Bermain Bola"} />
            <CardGallery gambar={gambar3} momen={"Di Malang"} />
          </div>
        </div>
      </section>
    </>
  );
}
export default Gallery;
