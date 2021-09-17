import React from "react";

import "./GalleryCard.css";

const GalleryCard = (props) => {
  const { imageURL, title, description } = props.info;

  return (
    <div>
      <img src={imageURL} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GalleryCard;
