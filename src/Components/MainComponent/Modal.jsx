import React from "react";
import Menu from "./Menu";
import Search from "./Search";
import "../../Style/modal.css";

function Modal({ openSearch, openMenu }) {
  return (
    <>
      <div className={`modal-menu ${openMenu ? "active-modal" : ""}`}>
        {openMenu && <Menu selectMenu={openMenu} />}
      </div>
      <div className={`modal-search ${openSearch ? "active-modal" : ""}`}>
        {openSearch && <Search open={openSearch} />}
      </div>
    </>
  );
}

export default Modal;
