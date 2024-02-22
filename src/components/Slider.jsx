

import React from "react";
import { Carousel } from "flowbite-react";
import { SliderTempData } from "../data";

const Slider = () => {
  return (
    <div>
      <div className="w-full  h-[200px] md:h-[400px] lg:h-[647px] border relative overflow-hidden">
      <Carousel indicators={false}>
          {SliderTempData.map((slide) => (
            <img
              key={slide.id}
              src={slide.img}
              alt={slide.title}
              style={{ backgroundColor: `#${slide.bg}` }}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
