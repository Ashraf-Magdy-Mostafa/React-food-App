import React from "react";
import "./header.css";
import image from "../meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <h1>Meals</h1>
        <HeaderCartButton show={props.onClick} />
      </header>
      <div className="main-image ">
        <img src={image} alt="meal img" />
      </div>
    </React.Fragment>
  );
};

export default Header;
