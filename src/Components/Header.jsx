import React, { useEffect, useState } from "react";
import "../Style/header.css";
import logo from "../Images/logo.svg";
import { Link } from "react-router-dom";
import navbar from "../Images/Group 9.svg";
import navclose from "../Images/Group 8.svg";
import Modal from "./MainComponent/Modal";
import { IoIosArrowBack } from "react-icons/io";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [opacityChanged, setOpacityChanged] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    if (windowWidth > 1020) {
      setClicked(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  const handleClick = () => {
    setClicked(!clicked);
    setOpacityChanged(true);
    setTimeout(() => {
      setOpacityChanged(false);
    }, 100);
    document.body.style.overflow = clicked ? "visible" : "hidden";
  };
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    setOpenSearch(false);
    document.body.style.overflow = openMenu ? "visible" : "hidden";
  };
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
    setOpenMenu(false);
    document.body.style.overflow = openSearch ? "visible" : "hidden";
  };
  return (
    <>
      <header>
        <div
          className={`header-top ${opacityChanged ? "hidden" : ""}`}
          style={{ display: clicked ? "none" : "flex" }}
        >
          <div className="header-left">
            <Link>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header-right">
            <nav>
              <ul>
                <li>
                  <Link>What is Chaplean</Link>
                </li>
                <li>
                  <Link>Our difference</Link>
                </li>
                <li>
                  <Link>Pricing</Link>
                </li>
                <li>
                  <Link>Docs</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="header-nav">
              <button className="btn" onClick={handleClick}>
                <img src={navbar} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={`overlay ${clicked ? "active" : ""}`}>
          <div
            className={`header-response ${opacityChanged ? "hidden" : ""}`}
            style={{ display: clicked ? "block" : "none" }}
          >
            <div className="respons">
              <div className="header-left">
                <Link>
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="header-right">
                <div className="header-nav">
                  <button className="btn" onClick={handleClick}>
                    <img src={navclose} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="nav-bottom">
              <nav className="bottom-bar">
                <ul>
                  <li>
                    <Link>What is Chaplean</Link>
                  </li>
                  <li>
                    <Link>Our difference</Link>
                  </li>
                  <li>
                    <Link>Pricing</Link>
                  </li>
                  <li>
                    <Link>Docs</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          {openMenu ? (
            <p className="res-text" onClick={handleOpenMenu}>
              <IoIosArrowBack /> back
            </p>
          ) : (
            <p
              className="res-text"
              onClick={handleOpenMenu}
              style={{ display: openSearch ? "none" : "block" }}
            >
              menu
            </p>
          )}
          {openSearch ? (
            <p className="res-text" onClick={handleOpenSearch}>
              <IoIosArrowBack /> back
            </p>
          ) : (
            <p
              className="res-text"
              onClick={handleOpenSearch}
              style={{ display: openMenu ? "none" : "block" }}
            >
              search
            </p>
          )}
        </div>
        <Modal openMenu={openMenu} openSearch={openSearch} />
      </header>
    </>
  );
}

export default Header;
