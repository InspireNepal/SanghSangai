import { useEffect, useState } from "react";
import "../css/Header.css";
import Logo from "../img/logo.png";
import { Link, Navigate } from "react-router-dom";

const Header = () => {
  const menuOpen = () => {
    var nav = document.getElementById("navigation");
    nav.classList.add("active");
  };

  const menuClose = () => {
    var nav = document.getElementById("navigation");
    nav.classList.remove("active");
  };

  const scrollToBackground = () => {
    const backgroundSection = document.getElementById("background");
    if (backgroundSection) {
      backgroundSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCP = () => {
    const CPSection = document.getElementById("communityPartner");
    if (CPSection) {
      CPSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    const ProjectSection = document.getElementById("project");
    if (ProjectSection) {
      ProjectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTeam = () => {
    const TeamSection = document.getElementById("team");
    if (TeamSection) {
      TeamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activate = (e) => {
    // console.log(e.target.parentElement);
    var navLists = document.querySelectorAll(".nav-list");
    navLists.forEach((list) => {
      if (list.classList.contains("active")) {
        list.classList.remove("active");
      }
    });
    e.target.parentElement.classList.add("active");
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="SanghSangai logo" />
        </Link>
      </div>
      <nav id="navigation">
        <ul>
          <li className="nav-list active" onClick={activate}>
            <a href="/SanghSangai/#background" onClick={scrollToBackground}>
              Background
            </a>
          </li>

          <li className="nav-list" onClick={activate}>
            <a href="/SanghSangai/#communityPartner" onClick={scrollToCP}>
              Community Partner
            </a>
          </li>
          <li className="nav-list" onClick={activate}>
            <a href="/SanghSangai/#project" onClick={scrollToProject}>
              Project
            </a>
          </li>
          <li className="nav-list" onClick={activate}>
            <a href="/SanghSangai/#team" onClick={scrollToTeam}>
              Team
            </a>
          </li>

          <li className="nav-list" onClick={activate}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <i
            id="menu-close"
            className="fa-solid fa-xmark"
            onClick={menuClose}
          ></i>
        </ul>
      </nav>
      <div className="menu-icon">
        <i id="menu-toggle" className="fa-solid fa-bars" onClick={menuOpen}></i>
      </div>
    </header>
  );
};

export default Header;
