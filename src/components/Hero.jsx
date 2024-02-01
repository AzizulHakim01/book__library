import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Hero = () => {
  return (
    <div className="hero__bg ">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center md:min-h-[500px]">
        <div className="overflow-hidden">
          <p className="bg-white py-1 px-4 rounded-lg w-72 text-center shadow-xl">
            Analysis, Research, Problem Solving
          </p>
          <h1 className="md:text-8xl capitalize">
            Find yourself in a great book
          </h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at
            commodi hic repellendus voluptatum.
          </p>
          <div className="flex gap-10 items-center mt-3 overflow-hidden">
            <span className="flex gap-2 items-center bg-white px-3 py-2 rounded-lg shadow-xl hover:bg-transparent hover:border-2 hover:border-white cursor-pointer transition-all duration-100">
              get started <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <span className="border-white border-2 px-3 py-2 rounded-lg shadow-xl hover:bg-white cursor-pointer transition-all duration-100">learn more</span>
          </div>
        </div>
        <img src="/cover.png" alt="cover" className="w-[40%] image__animation" />
      </div>
    </div>
  );
};

export default Hero;
