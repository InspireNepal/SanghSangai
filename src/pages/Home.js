import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

import img1 from "../img/aeliya.jpg";
import img2 from "../img/anushka.jpg";
import img3 from "../img/riya.jpg";
import img4 from "../img/subash.jpg";
import img5 from "../img/testomonial.png";
import img6 from "../img/inspire.png";
import img7 from "../img/tearfund.png";
import img8 from "../img/micah.jpg";
import img9 from "../img/team.jpg";

import Header from "../components/Header";

import ProjectDesc from "../components/ProjectDesc";
import CPActivities from "../components/CPActivities";

import Background from "../components/background/Background";
import CommunityPartner from "../components/communityPartner/CommunityPartner";
import AboutSlider from "../components/AboutSlider";
import Banner from "../components/Banner";
import PartnerCard from "../components/PartnerCard";
import Default from "../layouts/Default";
import Ambassador from "../components/Ambassador";

const Home = () => {
  return (
    <Default>
      <Banner />
      <div className="home-container">
        <Background />

        {/* company logo */}
        <PartnerCard />

        {/* Our team */}

        <CommunityPartner />
        <CPActivities />
        <ProjectDesc />
        <Ambassador />
        <div id="team" className="team-wrap">
          <div className="container">
            <h2 className="heading text-center mb-5">Meet Our Team</h2>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="team-member">
                  <div
                    className="round-image"
                    style={{ backgroundImage: `url(${img1})` }}
                  ></div>
                  <p className="membername">Aeliya Tamang</p>
                  <p>BSc. CSIT</p>
                  <p>Madan Bhandari Memorial College</p>
                  <p className="universityname">Tribhuwan University</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="team-member">
                  <div
                    className="round-image"
                    style={{ backgroundImage: `url(${img2})` }}
                  ></div>
                  <p className="membername">Anushka Suyal</p>
                  <p>BSc. CSIT</p>
                  <p>Ambition College</p>
                  <p className="universityname">Tribhuwan University</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="team-member">
                  <div
                    className="round-image"
                    style={{ backgroundImage: `url(${img3})` }}
                  ></div>
                  <p className="membername">Riya Shrestha</p>
                  <p>BSc (Hons) Computing</p>
                  <p>Islington College</p>
                  <p className="universityname">
                    London Metropolitan University
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="team-member">
                  <div
                    className="round-image"
                    style={{ backgroundImage: `url(${img4})` }}
                  ></div>
                  <p className="membername">Subash Danuwar</p>
                  <p>BIT</p>
                  <p>KIST College</p>
                  <p className="universityname">Purbanchal University</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Us Section */}
          <AboutSlider />
        </div>
      </div>
    </Default>
  );
};

export default Home;
