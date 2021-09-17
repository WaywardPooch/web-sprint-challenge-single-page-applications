import React from "react";

import "./Gallery.css";

import GalleryCard from "../GalleryCard/GalleryCard.jsx";

const Gallery = (props) => {
  const { foods } = props;

  return (
    <section className="food-gallery">
      <h2>Our Selection</h2>
      <div className="gallery-content">
        {foods.map((card, index) => {
          return <GalleryCard key={index} info={card} />;
        })}
      </div>
    </section>
  );
};

export default Gallery;
