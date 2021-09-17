import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";

const Hero = (props) => {
  const { title, hasButton, buttonText, buttonRoute, buttonID } = props.info;
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        {hasButton && (
          <Link id={buttonID} to={buttonRoute}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
