import React from "react";
import pic from "../img/aarjan.png";
import "../css/Ambassador.css";

const Ambassador = () => {
  return (
    <div className="ambassador">
      <div className="ambassador-div">
        <div className="am-img">
          <img className="imgam" src={pic} alt="" />
        </div>
        <div className="am-description">
          <h2 className="heading ">Meet Our Ambassador</h2>
          <div className="desc">
            <p className="ambassadorname">Aarjan Ghimire</p>
            <p>BE. Computer Engineering</p>
            <p>Thapathali Campus</p>
            <p className="universityname">Tribhuwan University</p>
          </div>
          <p>
            Aarjan a previous INSPIRE 2022 member of Team AKAS, grateful for
            this opportunity to lead as an ambassador this year. He is hoping to
            be a helping hand for the Nepal teams to bring out the best outcome.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
