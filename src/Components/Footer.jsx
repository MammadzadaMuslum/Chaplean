import React from "react";
import logo from "../Images/logo.svg";
import download from "../Images/download-svgrepo-com 1.svg";
import { Link } from "react-router-dom";
import "../Style/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-texts">
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
            </div>
          </div>
          <div className="footer-right">
            <button className="download-btn">
              <img src={download} alt="" /> Download
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">Privacy & Policy - Cookies</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
