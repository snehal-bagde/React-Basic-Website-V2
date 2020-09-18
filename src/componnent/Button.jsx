import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLE = ["btn--primery", "btn--outline"];

const SIZE = ["btn--medium", "btn-large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <>
      <Link to="/sign-up" className="btn-mobile">
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
          {children}
        </button>
      </Link>
    </>
  );
};

export default Button;
