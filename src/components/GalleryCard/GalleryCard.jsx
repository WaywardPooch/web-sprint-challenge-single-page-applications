import React from "react";

import "./GalleryCard.css";
import foodIcon from "../../assets/food-icon.png";

const GalleryCard = (props) => {
  const { title, description, price } = props.info;

  return (
    <div className="gallery-card">
      <img alt="icon of fork and knife as placeholder" src={foodIcon} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>BUY: ${price}</button>
    </div>
  );
};

export default GalleryCard;
