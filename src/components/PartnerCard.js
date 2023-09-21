import React from "react";
import img6 from "../img/inspire.png";
import img7 from "../img/tearfund.png";
import img8 from "../img/micahlogo.jpg";
import "../css/PartnerCard.css";

const PartnerCard = () => {
  return (
    <>
      <div className="partnercards">
        <div className="partnercard">
          <img src={img8} />
        </div>
        <div className="partnercard">
          <img src={img6} />
        </div>
        <div className="partnercard">
          <img src={img7} />
        </div>
      </div>
    </>
  );
};

export default PartnerCard;
