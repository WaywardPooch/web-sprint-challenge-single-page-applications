import React from "react";

import "./Hero.css";

const Hero = (props) => {
  const { title, hasButton, buttonText } = props.info;
  return (
    <section>
      <div className="hero-content">
        <h1>{title}</h1>
        {hasButton && <button>{buttonText}</button>}
      </div>
    </section>
  );
};

export default Hero;
