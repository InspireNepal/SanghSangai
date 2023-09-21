import React from "react";
import communityPartner1 from "../../img/tearfundpeople.jpg";
import communityPartner2 from "../../img/micah.jpg";
import "../../css/CommunityPartner.css";

const CommunityPartner = () => {
  return (
    <div
      id="communityPartner"
      className="communityPartner d-flex justify-content-center align-items-center col-md"
    >
      <div className="image-container">
        <div className="first-image">
          <img className="object-fit-cover" src={communityPartner2} alt="" />
        </div>
        <div className="second-image">
          <img className="object-fit-cover" src={communityPartner1} alt="" />
        </div>
      </div>
      <div className="content">
        <h2 className="title">Community Partners</h2>
        <div className="desc">
          <p>
            The two of the community partners for this year's project are
            Tearfund and Micah Nepal.
          </p>
        </div>
        <div className="tearfund-container">
          <div className="cp-items">
            <h4 className="title">Tearfund Nepal</h4>
            <div className="desc">
              <p>
                Tearfund has been working in Nepal since the 1970s and is
                currently partnering with seven organisations across the
                country.
              </p>
            </div>
          </div>
          <div className="cp-items">
            <div className="first"></div>
            <div className="second"></div>
            <h4 className="title">Micah Nepal</h4>
            <div className="desc">
              <p>
                Micah Nepal is a registered non-governmental organization in
                Nepal. They attend and seek to assist in Nepal where help is
                needed, whether it be Education, Caring for Families, Water
                Cleanliness, Food supplies and disaster support. Micah has been
                working to equip and empower members and leaders in communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartner;
