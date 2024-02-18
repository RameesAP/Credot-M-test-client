import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CatProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/product/getallpro?category=${category}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log(data, "dattttttttttttttttttttttttttttttttttttttttttttttt");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 border">
      <div className="w-full p-5">
        <div className="grid md:grid-cols-4 gap-4 border p-5">
          {products.map((product) => (
            <div key={product.id} className="border w-full h-[394px]">
              <Link to={`/product/${product._id}`}>
                <div className="h-[70%] flex items-center justify-center  ">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-fit h-fit object-cover"
                  />
                </div>
                <div className="h-[30%]  p-2">
                  <h3 className="text-[#1AA5C3] font-semibold uppercase text-xs">
                    {product.categories}
                  </h3>
                  <h1 className="font-bold mt-1">{product.title}</h1>
                  <div className="flex text-slate-500 font-semibold">
                    INR
                    <div className="ml-2 font-bold text-black">
                      {product.price}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatProducts;
