import React from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import "./Contact.css";
import FormContact from "../../components/FormContact/FormContact";

function Contact() {
  return (
    <>
      <Nav />
      <Header id={"Contact"} />
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
