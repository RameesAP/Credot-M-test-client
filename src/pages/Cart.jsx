import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [productQuantities, setProductQuantities] = useState({});
  const [cartData, setCartData] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const BASE_URL = "https://credotbackramees.onrender.com";

  useEffect(() => {
    if (!currentUser) {
      // Handle case when user is not authenticated
      return;
    }

    const fetchCartData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/api/cart/usercartprod/${currentUser._id}`
          // `/api/cart/usercartprod/${currentUser._id}`
        );
        const data = await response.json();

        // Extract and set quantities
        const initialQuantities = {};
        data.products.forEach((product) => {
          initialQuantities[product.productId] = product.quantity;
        });
        setProductQuantities(initialQuantities);
        console.log(data);
        setCartData(data.products);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [currentUser]);

  const handleQuantity = async (type, productId) => {
    try {
      const currentQuantity = productQuantities[productId] || 0;
      // Calculate the new quantity based on the current state
      const newQuantity =
        type === "dec" ? Math.max(currentQuantity - 1, 0) : currentQuantity + 1;

      if (newQuantity === 0) {
        // If quantity is 0, remove the product
        handleRemoveProduct(productId);
        return;
      }

      // Make a request to the server to update the quantity
      const response = await fetch(
        `${BASE_URL}/api/cart/updateQuantity/${currentUser._id}`,
        // `/api/cart/updateQuantity/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId,
            newQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update quantity");
      }

      // Assuming the response contains the updated cart data
      const updatedCartData = await response.json();

      // Update the local state with the new quantity for the specific product
      const updatedProducts = cartData.map((product) => {
        if (product.productId === productId) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });

      // Update productQuantities with the new quantity
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));

      setCartData(updatedProducts);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleRemoveProduct = async (productId) => {
    try {
      // Make a request to the server to remove the product from the cart
      const response = await fetch(
        `${BASE_URL}/api/cart/removeproduct/${currentUser._id}/${productId}`,
        // `/api/cart/removeproduct/${currentUser._id}/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to remove product");
      }

      // Assuming the response contains the updated cart data
      const updatedCartData = await response.json();

      // Update the local state with the new cart data
      setCartData(updatedCartData.products);
      navigate("/");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const calculateTotalAmounts = () => {
    const subtotal = cartData.reduce((total, product) => {
      return total + product.productDetails?.price * product.quantity;
    }, 0);

    // You can add additional logic for taxes, discounts, etc.
    const total = subtotal;

    return { subtotal, total };
  };

  const { subtotal, total } = calculateTotalAmounts();

  return (
    <div className="">
      <div className="w-full h-[100px] bg-slate-200 flex items-center justify-center font-bold text-xl">
        Cart
      </div>
      <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 ">
        <div className=" w-full h-full">
          <div className="md:py-28 py-10 md:flex">
            <div className="md:w-[70%] bg-white px-10 py-10 ">
              <div className="flex mb-5">
                <h3 className="font-bold  text-xs uppercase w-2/5">Product</h3>

                <h3 className="font-bold   text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-bold   text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-bold  text-xs uppercase w-1/5 text-center ">
                  subTotal
                </h3>
              </div>
              <hr />

              {cartData && cartData.length > 0 ? (
                cartData.map((product) => (
                  <div
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                    key={product.productId}
                  >
                    <div className="flex w-2/5">
                      <div className="w-20">
                        <img
                          className="h-24"
                          src={product.productDetails?.image[0]}
                          alt={product.productDetails?.name}
                        />
                      </div>
                      <div className="flex items-center justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">
                          {product.productDetails?.name}
                        </span>
                      </div>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${product.productDetails?.price.toFixed(2)}
                    </span>
                    <div className="flex justify-center w-1/5">
                      <div className="border flex">
                        <div
                          onClick={() =>
                            handleQuantity("dec", product.productId)
                          }
                          className="border w-[50%] flex items-center justify-center hover:cursor-pointer p-2"
                        >
                          <FaMinus />
                        </div>
                        <div className="border w-[50%] flex items-center justify-center p-3">
                          {product.quantity}
                        </div>
                        <div
                          onClick={() =>
                            handleQuantity("inc", product.productId)
                          }
                          className="border w-[50%] flex items-center justify-center hover:cursor-pointer p-2"
                        >
                          <FaPlus />
                        </div>
                      </div>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      $
                      {(
                        (product.productDetails?.price || 0) * product.quantity
                      ).toFixed(2)}
                    </span>
                  </div>
                ))
              ) : (
                <div className="border p-14 flex items-center justify-center">
                  <p className="font-bold uppercase text-xl">
                    No items in the cart
                  </p>
                </div>
              )}
              <hr />
              {/* Repeat the above structure for other product entries */}
              <div className="flex justify-between mt-3">
                <div className="flex ">
                  <input
                    className="h-11 w-24 md:h-full md:w-44"
                    placeholder="Coupon code"
                    type="text"
                  />
                  <div className="h-11 text-xs md:h-full md:text-base uppercase border flex items-center justify-center px-4 bg-black text-white">
                    Apply coupon
                  </div>
                </div>
                <div className="">
                  <button className="h-11 text-xs md:h-full md:text-base uppercase border-2 border-black p-3 px-5 font-semibold flex items-center justify-center ">
                    Update Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[30%] border h-full p-5">
              <h1 className="font-extrabold text-xl"> Cart Total</h1>

              <div className=" flex justify-between items-center mt-5">
                <h1 className="font-bold">Subtotal</h1>
                <h1 className="font-semibold ">INR {subtotal.toFixed(2)}</h1>
              </div>

              <hr className="mt-3" />

              <div className=" flex justify-between items-center mt-3">
                <h1 className="font-bold">Total</h1>
                <h1 className="font-bold text-3xl">INR {total.toFixed(2)}</h1>
              </div>
              <div className="  flex items-center justify-center mt-10">
                <Link to="/order">
                  <button className="  uppercase w-full p-5 bg-[#1AA5C3] text-white font-semibold">
                    Proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
