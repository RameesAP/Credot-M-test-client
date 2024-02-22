import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddProducts from "../components/AddProducts";
import AddCategory from "../components/AddCategory";

const Dashboard = () => {
  const { currentAdmin } = useSelector((state) => state.admin);
  const [showAddProduct, setShowAddProduct] = useState(true);

  console.log(currentAdmin, "sssssssssss");

  const handleToggleComponent = (isAddProduct) => {
    setShowAddProduct(isAddProduct);
  };

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="w-full h-full bg-[#F4F4F4] flex items-center justify-center">
        <div className=" w-full h-full">
          <div className="border p-5 flex gap-10 items-center justify-center">
            {/* <button
              className={`uppercase border px-5 p-3 bg-[#1AA5C3] text-white font-semibold ${showAddProduct ? 'opacity-50' : ''}`}
              onClick={() => handleToggleComponent(false)}
            >
              Add Category
            </button> */}
            <button
              className={`uppercase border px-5 p-3 bg-[#1AA5C3] text-white font-semibold ${showAddProduct ? '' : 'opacity-50'}`}
              onClick={() => handleToggleComponent(true)}
            >
              Add Product
            </button>
          </div>
          <div className="flex items-center justify-center">
            {showAddProduct && <AddProducts /> 
            // : <AddCategory />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
