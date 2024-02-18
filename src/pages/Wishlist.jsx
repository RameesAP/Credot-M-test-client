import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Wishlist = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className="">
      <div className="w-full h-[100px] bg-slate-200 flex items-center justify-center font-bold text-xl">
        Wishlist
      </div>
      <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 ">
        <div className=" w-full h-full">
          <div className="md:py-28 py-10 md:flex w-full border">
            <div className="w-full border bg-white px-10 py-10 ">
              <div className="flex mb-5">
                <h3 className="font-bold  text-xs uppercase w-2/5">Product</h3>

                <h3 className="font-bold   text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-bold   text-xs uppercase w-1/5 text-center">
                  Stock Status
                </h3>
                <h3 className="font-bold  text-xs uppercase w-1/5 text-center ">
                  Action
                </h3>
              </div>
              <hr />
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-5g-sm-s921.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" flex items-center justify-between ml-4 flex-grow">
                    <span className=" font-bold text-sm">Samsung</span>
                    {/* <span className="text-red-500 text-xs">Apple</span> */}
                    {/* <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Remove
                </a> */}
                  </div>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $400.00
                </span>
                <div className="flex justify-center w-1/5">
        
                  <div className="">Stock</div>
                </div>

                <span className="text-center w-1/5 font-semibold text-sm">
                 <div className="md:flex">
                  <button className=" h-11 text-xs md:h-9 md:text-xs  uppercase border-2 border-black p-3 px-5 font-semibold flex items-center justify-center">Quick view</button>
                  <button className="h-11 text-xs md:h-9 md:text-xs  uppercase border-2 border-black bg-black text-white p-3 px-5 font-semibold flex items-center justify-center">Add to cart</button>
                 </div>
                </span>
              </div>
              <hr />
              {/* Repeat the above structure for other product entries */}
              {/* <div className="flex justify-between mt-3">
                <div className="flex ">
                  <input className="h-full" placeholder="Coupon code" type="text" />
                  <div className="h-full uppercase border flex items-center justify-center px-4 bg-black text-white">Apply coupon</div>
                </div>
                <div className="">
                  <button className="uppercase border-2 border-black p-3 px-5 font-semibold text-sm ">
                    Update Cart
                  </button>
                </div>
              </div> */}
            </div>
            {/* <div className="md:w-[30%] border h-full p-5">
              <h1 className="font-extrabold text-xl"> Cart Total</h1>

              <div className=" flex justify-between items-center mt-5">
                <h1 className="font-bold">Subtotal</h1>
                <h1 className="font-semibold ">INR 107</h1>
              </div>

              <hr className="mt-3" />

              <div className=" flex justify-between items-center mt-3">
                <h1 className="font-bold">Total</h1>
                <h1 className="font-bold text-3xl">INR 107</h1>
              </div>
              <div className="  flex items-center justify-center mt-10">
                <button className="  uppercase w-full p-5 bg-[#1AA5C3] text-white font-semibold">
                  Proceed to checkout
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
