import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { addProduct } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";



const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser,"currentUsercurrentUsercurrentUser");
  const { id } = useParams();
  console.log(id, "paraaaaaaaaams");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/find/${id}`);
        const data = await response.json();
        console.log(data,"data");
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

    // Update the endpoint to match your actual server endpoint
    const addToCartEndpoint = "/api/cart/create";
    const userId = currentUser ? currentUser._id : null;

    // Prepare the data to be sent to the server
    const data = {
      userId,
      productId: id,
      quantity,
      color: colorToUse,
      memory: memoryToUse,
      // Add any other necessary data here
    };

    // Make a POST request to the server
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
        // Assuming your server returns some data, you can handle it here
        // For example, you might want to update the Redux store with the added product
        dispatch(addProduct(responseData));

        // Reset the selected options and quantity after adding to cart
        setSelectedMemory(null);
        setSelectedColor(null);
        setQuantity(1);
      })
      .catch((error) => {
        console.error("Error adding product to cart:", error);
      });
  };
  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 border">
      {Object.keys(product).length > 0 && (
        <div className="border w-full md:h-[600px] md:flex">
          <div className="border md:w-[40%] flex items-center justify-center">
            <img className="" src={product.img} alt={product.title} />
          </div>
          <div className=" border md:w-[60%] p-2">
            <div className="border flex flex-col gap-5 p-2">
              <h1 className="font-bold text-2xl">{product.title}</h1>
              <span className="font-medium text-slate-500">
                {product.reviews || "No reviews"}
              </span>
              <span className="flex font-medium text-slate-500">
                INR :{" "}
                <div className="font-bold text-black">{product.price}</div>
              </span>
              <span className="font-medium text-slate-500">{product.desc}</span>
              <div className="">
                <h1 className="font-semibold">color</h1>

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
                        selectedMemory === memory
                          ? "bg-black text-white"
                          : ""
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
                  <button onClick={handleClick} className="w-[200px] bg-black font-semibold text-white h-[48px] uppercase">
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
  );
};

export default ProductDetails;
