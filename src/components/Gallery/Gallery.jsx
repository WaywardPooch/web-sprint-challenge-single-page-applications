import React from "react";

import "./Gallery.css";

import GalleryCard from "../GalleryCard/GalleryCard.jsx";

const Gallery = (props) => {
  const { foods } = props;

  return (
    <section>
      <div className="gallery-content">
        {foods.map((card) => {
          return <GalleryCard info={card} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
