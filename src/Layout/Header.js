import React from "react";
import "./header.css";
import image from "../meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image ">
        <img src={image} alt="meal img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
