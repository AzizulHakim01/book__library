import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

const Homepage = () => {
  return (
    <div className="hero__bg">
      <Header />
      <Hero/>
      <Slider/>
    </div>
  );
};

export default Homepage;
