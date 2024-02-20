import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);

  const shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const BASE_URL = "https://credotbackramees.onrender.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("/api/product/getallpro");
        const response = await fetch(`${BASE_URL}/api/product/getallpro`);
        if (response.ok) {
          const data = await response.json();
          setProducts(shuffleArray(data).slice(0, 5)); // Limit to first 5 products
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mb-20">
      <div className="grid md:grid-cols-5   border">
        {products.map((product, index) => (
          <div key={index} className="w-full h-[394px] border">
            <div className=" h-[70%] flex items-center justify-center  relative">
              <Link to={`/product/${product._id}`} onClick={handleLinkClick}>
                <img className="p-5" src={product.img} alt={product.title} />
              </Link>
              <div className="absolute w-10 h-10 border rounded-full bottom-5 end-5 bg-white flex items-center justify-center hover:bg-[#1AA5C3] hover:text-white">
                <FaPlus />
              </div>
            </div>
            <div className="h-[30%]  p-2">
              <h2 className="uppercase text-xs font-semibold text-[#1AA5C3]">
                {product.categories}
              </h2>
              <h1 className="font-semibold mt-2">{product.title}</h1>
              <div className="uppercase  text-slate-600 font-bold text-sm mt-2">
                inr <span className=" text-black">{product.price}</span>
                <span className="text-slate-600 font-bold text-sm ml-2 line-through">
                  {product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
