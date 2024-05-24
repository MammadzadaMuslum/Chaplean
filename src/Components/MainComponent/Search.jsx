import React from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import "../../Style/search.css";

function Search({ open }) {
  return (
    <>
      <div className={`right-bar ${open ? "right-active" : ""}`}>
        <div className="search-inp">
          <div>
            <IoSearch className="src-icon" />
            <input className="inp" placeholder="Search" />
          </div>
        </div>
        <div className="bar-texts">
          <nav>
            <ul className="nav-bar">
              <li>
                <Link>On this page</Link>
              </li>
              <li>
                <Link>Accesbility</Link>
              </li>
              <li>
                <Link>What is Chaplean</Link>
              </li>
              <li>
                <Link>How to use</Link>
              </li>
              <li>
                <Link>Accesbility</Link>
              </li>
            </ul>
            <ul className="nav-bar-bottom">
              <li>
                <Link>Edit this page</Link>
              </li>
              <li>
                <Link>Managed Chaplean</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Search;
