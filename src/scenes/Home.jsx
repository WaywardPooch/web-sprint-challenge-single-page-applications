import React, { useState } from "react";

import foods from "../data/foodSelection.json";

import NavHeader from "../components/NavHeader/NavHeader.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Gallery from "../components/Gallery/Gallery.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HeroDetails = {
  title: "Your favorite food, delivered while coding",
  hasButton: true,
  buttonText: "Pizza?",
  buttonRoute: "/pizza",
  buttonID: "order-pizza",
};

const HomePage = () => {
  return (
    <>
      <NavHeader />
      <Hero info={HeroDetails} />
      <Gallery foods={foods} />
      <Footer />
    </>
  );
};

export default HomePage;
