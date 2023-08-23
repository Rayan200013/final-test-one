import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const search = document.getElementById("search");
    const button = document.getElementById("button");
    const input = document.getElementById("input");

    function loading() {
      search.classList.add("loading");

      setTimeout(function () {
        search.classList.remove("loading");
      }, 1500);
    }

    button.addEventListener("click", loading);

    input.addEventListener("keydown", function (event) {
      if (event.keyCode === 13) {
        loading();
      }
    });

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      button.removeEventListener("click", loading);
      input.removeEventListener("keydown", loading);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <>
      <div className="main-slr">
        <nav className={`nav ${isScrolled ? "affix" : ""}`}>
          <div className="container">
            <div className="logo">
              <Link to="/">Your Logo</Link>
            </div>
            <div id="mainListDiv" className="main_list">
              <ul className="navlinks">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">Categories</Link>
                </li>
                <li>
                  <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="for-icons">
              <i className="fa-solid fa-user fa-xl login-user-slr"></i>
            </div>
            <span className="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
