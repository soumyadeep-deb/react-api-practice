import React from "react";
import "./DropdownMenu.css";

function DropdownMenu({ onSetType }) {
  return (
    <div className="dropdownMenu">
      <button className="dropbtn">Filter</button>
      <div className="dropdown-content">
        <div className="dropdownMenu__items" onClick={() => onSetType("")}>
          AllNews
        </div>

        <div
          className="dropdownMenu__items"
          onClick={() => onSetType("category=business&")}
        >
          Business
        </div>

        <div
          className="dropdownMenu__items"
          onClick={() => onSetType("category=health&")}
        >
          Health
        </div>

        <div
          className="dropdownMenu__items"
          onClick={() => onSetType("category=sports&")}
        >
          Sports
        </div>

        <div
          className="dropdownMenu__items"
          onClick={() => onSetType("category=entertainment&")}
        >
          Entertainment
        </div>

        <div
          className="dropdownMenu__items"
          onClick={() => onSetType("category=general&")}
        >
          General
        </div>

        <div
          className="dropdownMenu__items"
          onClick={() => onSetType("category=science&")}
        >
          Science
        </div>

        <div
          className="dropdownMenu__items"
          onClick={() => onSetType("category=technology&")}
        >
          Technology
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
