import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopBrands = () => {
  const [productData, setProductData] = useState([]);

  const BASE_URL = "https://credotbackramees.onrender.com";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/product/getallpro`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const products = await response.json();

        // Extract unique categories from product data
        const uniqueCategories = Array.from(
          new Set(products.map((product) => product.categories))
        );

        setProductData(uniqueCategories);
        console.log(productData, "productData");
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const categoryImages = {
    samsung:
      "https://static-00.iconduck.com/assets.00/samsung-icon-2048x2048-1ej4ectz.png",
    apple:
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    asus: "https://logowik.com/content/uploads/images/424_asus.jpg",
    google:
      "https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg",

    // Add more category-image mappings as needed
  };
  return (
    <div className="flex justify-between items-center max-w-7xl  mx-auto  p-3 ">
      <div className="h-[469px] w-full">
        <div className="  flex items-center justify-between p-4">
          <div className="font-bold text-2xl">Top Brands</div>
          <div className="font-bold text-sm"></div>
        </div>
        <hr />

        <div className="flex overflow-x-scroll  pb-10 hide-scroll-bar  mt-7">
          <div className="flex flex-nowrap lg:ml-30 md:ml-20 ml-10 ">
            {productData.map((category, index) => (
              <div key={index} className="inline-block px-3">
                <Link to={`/catproducts?category=${category}`} className="mt-7 hover:cursor-pointer w-64 h-64 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-center justify-center">
                  <div className="">
                    {categoryImages[category] && (
                      <img
                        src={categoryImages[category]}
                        alt={`${category} image`}
                        className="max-w-full max-h-full"
                      />
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
