import React from "react";
import SliderImg from "@/public/slider.png";

const Slider = () => {
  return (
    <div
      className="h-96 bg-center mb-24 bg-no-repeat bg-contain lg:bg-cover"
      style={{
        backgroundImage: `url(${SliderImg.src})`,
        height: "384px",
      }}
    ></div>
  );
};

export default Slider;
