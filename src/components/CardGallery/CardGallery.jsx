import React from "react";
import { Link } from "react-router-dom";
import "./CardGallery.css";

function CardGallery({ gambar, momen }) {
  return (
    <>
      <div class="col-lg-4 col-sm-12 mb-4">
        <div class="Populer-item">
          <Link class="Populer-link" data-bs-toggle="modal" to="">
            <div class="Populer-hover">
              <div class="Populer-hover-content"></div>
            </div>
            <img class="img-fluid" src={gambar} alt="..." />
          </Link>
          <div class="Populer-caption">
            <div class="Populer-caption-heading">{momen}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGallery;
