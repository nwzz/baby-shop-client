import React from "react";
import { Link } from "react-router-dom";

const OfferCard = () => {
  return (
    <div
      className="col-md-4 p-5 m-5  bg-white "
      style={{ borderRadius: "10px" }}
    >
      <h3>Buy Baby Instruments</h3>
      <div
        class="price d-flex pt-2 pb-2"
        style={{ color: "#FF7C5B !important" }}
      >
        <h4>start from $15</h4> &nbsp; &nbsp;<del>$30</del>
      </div>
      <p className="section-description">
        À la carte design: Configure the New Generation Priam stroller to fit
        your premium family lifestyle. The New Generation Priam Frame is the
        essential basis allowing you to attach one of four different options.
        For babies from birth.
      </p>
      <Link to="/" className="btn btn-primary theme-btn">
        click{" "}
      </Link>
    </div>
  );
};

export default OfferCard;
