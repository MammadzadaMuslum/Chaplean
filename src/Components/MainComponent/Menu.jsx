import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Style/menu.css";
import chaplean from "../../Images/Rectangle 213.svg";
import arrow from "../../Images/arrow-styles.svg";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Menu({ selectMenu }) {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className={`left-bar ${selectMenu ? "left-active" : ""}`}>
        <div className="bar-box">
          <div className="profile">
            <img src={chaplean} alt="" />
            <div className="profile-text">
              <h4>Chaplean App</h4>
              <p className="prof-p">Social media platform</p>
            </div>
          </div>
          <img className="arrow" src={arrow} alt="" />
        </div>
        <nav>
          <ul className="left-navbar">
            <li>
              <Link>Getting Started</Link>
            </li>
            <li>
              <Link>Installation</Link>
            </li>
            <li>
              <Link>Project Structure</Link>
            </li>
          </ul>
          <div className="acardions">
            <p className="acardion-text">Building Your Application</p>
            <div className="acardion">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Routing</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
            <div className="acardion">
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Data Fetching</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
            <div className="acardion">
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography>Rendering</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Menu;
