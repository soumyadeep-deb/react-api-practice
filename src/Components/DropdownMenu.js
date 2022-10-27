import React from "react";
import "./DropdownMenu.css";

function DropdownMenu({ onSetType }) {
  let categories = [
    "",
    "business",
    "health",
    "sports",
    "entertainment",
    "general",
    "science",
    "technology",
  ];

  return (
    <div className="dropdownMenu">
      <button className="dropbtn">Filter</button>
      <div className="dropdown-content">
        {categories.map((cat) => (
          <div
            className="dropdownMenu__items"
            onClick={() => {
              cat ? onSetType(`category=${cat}&`) : onSetType("");
            }}
          >
            {cat ? cat : "All"}
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default DropdownMenu;
