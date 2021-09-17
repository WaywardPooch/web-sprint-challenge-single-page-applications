import React from "react";

import "./GalleryCard.css";
import foodIcon from "../../assets/food-icon.png";

const GalleryCard = (props) => {
  const { title, description } = props.info;

  return (
    <div>
      <img src={foodIcon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GalleryCard;
