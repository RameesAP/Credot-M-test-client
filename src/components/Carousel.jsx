// // Carousel.js

// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const cards = [
//     // Add your content for each card
//     // For example, you can use images or other components here
//     'Card 1',
//     'Card 2',
//     'Card 3',
//     'Card 4',
//     'Card 5',
//     'Card 6',
//     'Card 6',
//     'Card 6',
//     'Card 6',
//     'Card 6',
//     'Card 6',
//     'Card 6',
//     'Card 6',
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="flex items-center justify-center h-screen w-full border">
//       <div className="relative overflow-hidden w-full ">
//         <div className="flex items-center justify-center transition-transform duration-300 ease-in-out transform translate-x-[calc(-100%*var(--currentIndex))]">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-52 h-52 bg-gray-300 rounded-full m-2 p-4 flex items-center justify-center"
//             >
//               {card}
//             </div>
//           ))}
//         </div>

//         <button
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-500 text-white"
//           onClick={handlePrev}
//         >
//           &lt;
//         </button>

//         <button
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-500 text-white"
//           onClick={handleNext}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// Carousel.js

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    'Card 1',
    'Card 2',
    'Card 3',
    'Card 4',
    'Card 5',
    'Card 6',
    'Card 7',

 
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center h-screen w-full border">
      <div className="relative overflow-hidden w-fit border">
        <div
          className="flex items-center justify-center transition-transform duration-300 ease-in-out ml-36 border w-fit"
          style={{ transform: `translateX(-${currentIndex * 10}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className=" flex-shrink-0 w-52 h-52 bg-gray-300 rounded-full m-2 p-4 flex items-center justify-center border"
            >
              {card}
            </div>
          ))}
        </div>

        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-500 text-white"
          onClick={handlePrev}
        >
          &lt;
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-500 text-white"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
