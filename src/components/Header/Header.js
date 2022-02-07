import React from "react";
import "./Header.css";

const Header = ({ name, id }) => {
  return (
    <>
      <div className="header">
        <h2 className="header-title">
          {name} {id}
        </h2>
      </div>
    </>
  );
};

export default Header;
