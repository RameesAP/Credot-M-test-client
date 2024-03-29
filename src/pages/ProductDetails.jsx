import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { addProduct } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser, "currentUsercurrentUsercurrentUser");
  const { id } = useParams();
  console.log(id, "paraaaaaaaaams");

  const BASE_URL = "https://credotbackramees.onrender.com";
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/product/find/${id}`);
        // const response = await fetch(`/api/product/find/${id}`);
        const data = await response.json();
        console.log(data, "data");
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleMemorySelect = (memoryOption) => {
    setSelectedMemory(memoryOption);
  };

  const handleClick = () => {
    const memoryToUse = selectedMemory || product.memory[0];
    const colorToUse = selectedColor || product.color[0];

    if (currentUser) {
      // User is logged in, add item to cart logic goes here
      const addToCartEndpoint = `${BASE_URL}/api/cart/create`;
      // const addToCartEndpoint = `/api/cart/create`;
      const userId = currentUser._id;

      const data = {
        userId,
        productId: id,
        quantity,
        color: colorToUse,
        memory: memoryToUse,
        // Add any other necessary data here
      };

      fetch(addToCartEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include any other headers if needed
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((responseData) => {
          dispatch(addProduct(responseData));

          // Reset the selected options and quantity after adding to cart
          setSelectedMemory(null);
          setSelectedColor(null);
          setQuantity(1);
        })
        .catch((error) => {
          console.error("Error adding product to cart:", error);
        });
    } else {
      // User is not logged in, redirect to sign-in page
      navigate("/sign-in");
      // Replace '/signin' with the actual path to your sign-in page
    }
  };
  return (
    <div className="">
      <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3">
        {Object.keys(product).length > 0 && (
          <div className=" w-full md:h-[600px] md:flex">
            <div className=" h-[700px] md:h-full md:w-[40%] flex flex-col ">
              <div className=" h-[70%] w-full flex items-center justify-center">
                <img className="" src={product.img[0]} alt={product.title} />
              </div>
              <div className="   h-[30%] w-full">
                <div className="flex justify-between gap-4 mt-5">
                  <div className="w-[135px] h-[135px]  flex items-center justify-center bg-slate-100">
                    <img
                      className="w-[80px]"
                      src={product.img[1] || product.img[0]}
                      alt={product.title}
                    />
                  </div>
                  <div className="w-[135px] h-[135px]  flex items-center justify-center bg-slate-100">
                    <img
                      className="w-[80px]"
                      src={product.img[2] || product.img[0]}
                      alt={product.title}
                    />
                  </div>
                  <div className="w-[135px] h-[135px]  flex items-center justify-center bg-slate-100">
                    <img
                      className="w-[80px]"
                      src={product.img[3] || product.img[0]}
                      alt={product.title}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="    md:w-[60%] p-2">
              <div className=" flex flex-col gap-5 p-2">
                <h1 className="font-bold text-2xl">{product.title}</h1>
                <span className="font-medium text-slate-500  flex items-center ju">
                  <div className="">
                    <div className="flex items-center ">
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>{" "}
                  <div className="ml-3">( There are no reviews yet )</div>
                </span>
                <span className="flex font-medium text-slate-500">
                  INR :{" "}
                  <div className="font-bold text-black">{product.price}</div>
                </span>
                <span className="font-medium text-slate-500">
                  {product.desc}
                </span>
                <div className="">
                  <h1 className="font-semibold">Color</h1>

                  <div className=" flex mt-3 mb-3 gap-3">
                    {product.color.map((color, index) => (
                      <div
                        key={index}
                        className={`w-10 h-10 border rounded-full flex items-center justify-center bg-slate-100`}
                        onClick={() => handleColorSelect(color)}
                      >
                        <div
                          className={`w-7 h-7 rounded-full bg-${color}-600 ${
                            selectedColor === color
                              ? "text-white flex items-center justify-center"
                              : ""
                          }`}
                        >
                          {selectedColor === color ? <TiTick /> : ""}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="">
                  <h1 className="font-semibold">Internal Memory</h1>

                  <div className=" flex mt-3 mb-3 gap-3">
                    {product.memory.map((memory, index) => (
                      <div
                        key={index}
                        className={`w-20 h-10 border flex items-center justify-center font-medium hover:cursor-pointer ${
                          selectedMemory === memory ? "bg-black text-white" : ""
                        }`}
                        onClick={() => handleMemorySelect(memory)}
                      >
                        {memory} GB
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="" />
                <div className="flex">
                  <div className="border flex w-[100px]">
                    <div
                      onClick={() => handleQuantity("dec")}
                      className="border w-[50%] flex items-center justify-center hover:cursor-pointer"
                    >
                      <FaMinus />
                    </div>
                    <div className="border w-[50%] flex items-center justify-center">
                      {quantity}
                    </div>
                    <div
                      onClick={() => handleQuantity("inc")}
                      className="border w-[50%] flex items-center justify-center hover:cursor-pointer"
                    >
                      <FaPlus />
                    </div>
                  </div>
                  <div className="ml-3">
                    <button
                      onClick={handleClick}
                      className="w-[200px] bg-black font-semibold text-white h-[48px] uppercase"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                <hr className="" />
                <div className="flex items-center">
                  <div className=" mr-3">
                    <CiHeart size={30} />
                  </div>
                  <div className="uppercase text-slate-500 text-sm font-semibold">
                    add to wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between items-center max-w-7xl mx-auto  mt-20">
        <div className="w-full">
          <div className="w-full">
            <div className="flex items-center gap-5 py-10 mb-4 border-b">
              <h1
                className={`  ${
                  activeTab === "overview"
                    ? "border-b-2 border-black font-bold"
                    : "font-medium"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </h1>
              <h1
                className={`  ${
                  activeTab === "specifications"
                    ? "border-b-2 border-black font-bold"
                    : "font-medium"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                Specifications
              </h1>
            </div>
          </div>

          {activeTab === "overview" && product && product.overview &&  (
            <div className="p-3">
              <ul className="list-disc p-5 font-[500] text-slate-800">
                {product.overview.map((item, index) => (
                  <li key={index} className="mb-2">
                  
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "specifications" && product && product.specifications &&(
            <div className="p-3">
              <ul className="list-disc p-5 font-[500] text-slate-800">
              {product.specifications.map((item, index) => (
                <li key={index} className="mb-2 ">{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3 mt-20">
        <div className="w-full">
          <div className="flex w-full border-b font-bold text-lg mb-10 py-10">
            Related Products
          </div>

          <RelatedProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
