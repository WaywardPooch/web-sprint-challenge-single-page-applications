import React from "react";

import NavHeader from "../components/NavHeader/NavHeader.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";

const HomePage = () => {
  const HeroDetails = {
    title: "Your favorite food, delivered while coding",
    hasButton: true,
    buttonText: "Pizza?",
  };
  return (
    <>
      <NavHeader />
      <Hero info={HeroDetails} />
      <Footer />
    </>
  );
};

export default HomePage;
