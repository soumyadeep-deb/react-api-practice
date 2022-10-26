import React from "react";
import "./DropdownMenu.css";

function DropdownMenu({ onSetType }) {
  return (
    <div className="dropdownMenu">
      <div className="dropdownMenu__items" onClick={() => onSetType("")}>
        AllNews
      </div>

      <div
        className="dropdownMenu__items"
        onClick={() => onSetType("category=business")}
      >
        Business
      </div>

      <div
        className="dropdownMenu__items"
        onClick={() => onSetType("category=health")}
      >
        Health
      </div>

      <div
        className="dropdownMenu__items"
        onClick={() => onSetType("category=sports")}
      >
        Sports
      </div>
    </div>
  );
}

export default DropdownMenu;
