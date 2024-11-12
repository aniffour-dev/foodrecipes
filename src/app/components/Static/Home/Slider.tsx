import React from "react";
import SliderImg from "@/public/slider.png";

const Slider = () => {
  return (
    <div
      className="h-96 bg-cover bg-center mb-24"
      style={{
        backgroundImage: `url(${SliderImg.src})`,
        height: "384px",
      }}
    ></div>
  );
};

export default Slider;
