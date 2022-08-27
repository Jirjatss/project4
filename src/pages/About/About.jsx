import React from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import gambar from "../../assets/Sajad.jpg";
import "../../components/Header/Header.css";
import "./About.css";

function About() {
  return (
    <>
      <Nav />
      <Header id={"About"} />
      <section>
        <div className="container About">
          <div className="row justify-content-between" style={{ textAlign: "justify" }}>
            <div className="col-md-4 mb-12">
              <img src={gambar} alt="" />
            </div>
            <div className="col-md-8 mb-12">
              <p>
                Nama saya Muhammad Hijir Sajad. Lahir di Yogyakarta, 28 April 1998. Lahir dan besar di keluarga yang harmonis. anak pertama dari pasangan Bapak Lukman S. Bachtiar dan Ibu Nurdiana. Mengawali pendidikan di Sekolah Dasar
                Negeri Dasan selama 6 tahun, MTs Al-Qalam Jereweh selama 3 tahun, SMAN 5 Mataram selama 3 tahun, dan yang terakhir di Universitas Brawijaya Malang. Saya memiliki hobi yang beragam, mulai dari olahraga contohnya sepak bola
                dan futsal, bermain alat musik contohnya gitar, dan bermain beraneka ragam game online baik di PC maupun di mobile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
