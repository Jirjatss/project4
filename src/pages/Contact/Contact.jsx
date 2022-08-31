import React from "react";
import Header from "../../components/Header/Header";
// import Nav from "../../components/Nav/Nav";
import { NavContext } from "../../context/NavContext";
import "./Contact.css";
import FormContact from "../../components/FormContact/FormContact";

function Contact() {
  const context = React.useContext(NavContext);
  return (
    <>
      {/* <Nav /> */}
      <Header id={context.lang === "en" ? "Contact" : "Kontak"} />
      <section class="page-section" id="Populer">
        <div class="container">
          <div class="row">
            <FormContact />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
