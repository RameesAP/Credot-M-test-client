import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { REACT_APP_BACKEND_URL } = import.meta.env;
const BASE_URL = REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/product/getallpro`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const displayedProducts = products.slice(0, 8);
  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 ">
      <div className="h- w-full">
        <div className="  flex items-center justify-between p-4">
          <div className="font-bold text-2xl">Products</div>
          <div className="font-bold text-sm">View All Products</div>
        </div>
        <hr />
        <div className="hidden md:block">
          <div className=" flex">
            <div className="bg-white p-4 w-[454px] h-[754px] mr-3">
              {products.length > 0 && (
                <div className="border h-[50%] ">
                  <Link to={`/product/${products[0]._id}`}>
                    <img
                      className="w-full"
                      src={products[0].img}
                      alt={products[0].title}
                    />
                  </Link>
                </div>
              )}
              {products.length > 0 && (
                <div className="border h-[50%] flex flex-col items-center">
                  <div className="text-[#1AA5C3] text-xs mt-16 font-bold">
                    {/* {products[0].categories.join(", ")} */}
                  </div>
                  <Link to={`/product/${products[0]._id}`}>
                    {" "}
                    <span className=" font-bold text-center mt-5">
                      {products[0].title}
                    </span>
                  </Link>
                  <span className="font-bold mt-5">{products[0].price}</span>
                  <button className="p-4 bg-[#1AA5C3] px-9 mt-5 text-white">
                    Add To Cart
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 w-full ">
              {products.slice(1, 7).map((product, index) => (
                <div key={product._id} className=" p-4 border">
                  <div className=" h-[70%] flex items-center justify-center relative">
                    <Link to={`/product/${product._id}`}>
                      <img className="" src={product.img} alt={product.title} />
                    </Link>
                    <div className="absolute hover:bg-[#1AA5C3] hover:text-white hover:cursor-pointer border p-2 rounded-full end-2 bottom-2">
                      <div className=" p-">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                  <div className=" h-[30%] flex flex-col items-center justify-center">
                    <div className="text-[#1AA5C3] text-xs mt-2 font-bold">
                      {/* {product.categories.join(", ")} */}
                    </div>
                    <span className=" font-bold text-center mt-1">
                      <Link to={`/product/${product._id}`}>
                        {" "}
                        {product.title}
                      </Link>
                    </span>
                    <span className="font-bold mt-1">INR: {product.price}</span>
                    {/* <button className="p-2 bg-[#1AA5C3] px-4 mt-1 text-white">
                      Add To Cart
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="w-full ">
            <div className="w-full  grid grid-cols-2 gap-4   p-5 ">
              {displayedProducts.map((product) => (
                <div key={product._id} className="-600  mb-5">
                  <div className="h-fit  ">
                    <div className=" flex items-center justify-center   ">
                      <img className=" h-fit" src={product.img} alt={product.title} />
                    </div>
                  </div>
                  <div className="h-[30%] p- ">
                    <div className="">
                      <div className="font-bold">{product.title}</div>
                      <div className="mt-2 flex text-slate-600">INR<div className="font-bold ml-2 text-black">{product.price}</div> </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageProducts;
