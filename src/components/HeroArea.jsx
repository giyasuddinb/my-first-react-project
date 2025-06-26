import React from "react";

const HeroArea = () => {
  return (
    <div
      className="flex flex-col text-white text-center items-center justify-center h-[90vh]"
      style={{
        backgroundImage: "url('/src/assets/hero-bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-4xl md:text-6xl mb-4 font-bold">
        Wellcom To My Website!
      </h2>
      <p className="text-md md:text-xl mb-3">
        [Start Your Needed Products Buy and Enjoy the Life]
      </p>
      <button className="bg-[#B13BFF] px-4 py-2 rounded-md cursor-pointer font-bold text-[#FFCC00]">
        Buy The Products
      </button>
    </div>
  );
};

export default HeroArea;
