//transition is not working thats why am using flowbite-react package



// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { SliderTempData } from "../data";

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const handleClick = (direction) => {
//     if (direction === "left") {
//       setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
//     } else {
//       setSlideIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0));
//     }
//   };

//   return (
//     <div className="w-full h-[200px] md:h-[400px] lg:h-[647px] border relative overflow-hidden">
//       <div
//         onClick={() => handleClick("left")}
//         className="p-2 md:p-3 lg:p-5 h-fit bg-slate-100 rounded-full absolute flex items-center justify-center top-0 bottom-0 left-5 z-10 cursor-pointer m-auto"
//       >
//         <FaArrowLeft />
//       </div>
//       <div className="flex h-full">
//          {SliderTempData.map((item, index) => (
//           <div
//             key={item.id}
//             className={`w-full h-full flex items-center transition-transform duration-1000 ease ${
//               index === slideIndex ? "transform translate-x-0" : "hidden"
//             }`}

//           >
//             <div className="h-full w-full flex">
//               <img className="h-full w-full" src={item.img} alt="banner" />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div
//         onClick={() => handleClick("right")}
//         className="p-2 md:p-3 lg:p-5 h-fit bg-slate-100 rounded-full absolute flex items-center justify-center top-0 bottom-0 end-0 right-5 z-10 cursor-pointer m-auto"
//       >
//         <FaArrowRight />
//       </div>
//     </div>
//   );
// };

// export default Slider;

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
