import React from "react";

import "./GalleryCard.css";
import foodIcon from "../../assets/food-icon.png";

const GalleryCard = (props) => {
  const { title, description } = props.info;

  return (
    <div className="gallery-card">
      <img src={foodIcon} />
      <h3>{title}</h3>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
  );
};

export default GalleryCard;
