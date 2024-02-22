import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AddProducts = () => {
  const { currentAdmin } = useSelector((state) => state.admin);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: [],
    memory: [],
    color: [],
    price: "",
    instock: false,
    categories: "",
    overview: [],
    specifications: [],
  });

  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // New state to track form reset
  const [formReset, setFormReset] = useState(false);
  const BASE_URL = "https://credotbackramees.onrender.com";
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/product/getallpro`);
        // const response = await fetch("/api/product/getallpro");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const products = await response.json();

        // Extract unique categories from product data
        const uniqueCategories = Array.from(
          new Set(products.map((product) => product.categories))
        );

        setProductData(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (formReset) {
      // Reset the form after successful submission
      setFormData({
        title: "",
        desc: "",
        img: [],
        memory: [],
        color: [],
        price: "",
        instock: false,
        categories: "",
        overview: [],
        specifications: [],
      });
      // Reset the formReset state to false after resetting the form
      setFormReset(false);
    }
  }, [formReset, setFormReset]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    // For special fields like images, color, and memory, handle them separately
    if (id === "img" || id === "color" || id === "memory") {
      setFormData({
        ...formData,
        [id]: value.split(",").map((item) => item.trim()),
      });
    } else if (id === "instock") {
      setFormData({
        ...formData,
        [id]: checked,
      });
    } else if (id === "categories") {
      setFormData({
        ...formData,
        categories: value, // Update categories in formData
      });
      setSelectedCategory(value); // Update selectedCategory state
    } else if (id === "overview" || id === "specifications") {
      setFormData({
        ...formData,
        [id]: value.split(",").map((item) => item.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (
      !formData.title ||
      !formData.desc ||
      !formData.img.length ||
      !formData.memory.length ||
      !formData.color.length ||
      !formData.price ||
      !formData.categories ||
      !formData.overview.length ||
      !formData.specifications.length
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      // Perform your submit logic here using formData
      setError(null);
      console.log(formData);

      // const response = await fetch("/api/admin/addproduct", {
      const response = await fetch(`${BASE_URL}/api/admin/addproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      // Set the formReset state to true to trigger the form reset
      setFormReset(true);
      window.location.reload()
      console.log("Product added successfully!");
    } catch (error) {
      setError("Error adding product. Please try again.");
      console.error("Error adding product:", error);
    }
  };
  console.log(currentAdmin, "sssssssssss");
  return (
    <div className="flex items-center justify-center">
      <div className="w-[800px] h-fit mt-5">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Name"
              // required
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="desc"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Description"
              // required
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="images"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Images (comma-separated URLs)
            </label>
            <input
              type="text"
              id="img"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Images (comma-separated URLs)"
              // required
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="memory"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Memory (comma-separated)
            </label>
            <input
              type="text"
              id="memory"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Memory (comma-separated)"
              // required
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Colors (comma-separated)
            </label>
            <input
              type="text"
              id="color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Colors (comma-separated)"
              // required
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              // required
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="instock"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              In Stock
            </label>
            <input
              type="checkbox"
              id="instock"
              className="mr-2"
              checked={formData.instock}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="categories"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Categories
            </label>
            <select
              id="categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              value={selectedCategory}
            >
              {productData.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="overview"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Overview (comma-separated)
            </label>
            <input
              type="text"
              id="overview"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Overview (comma-separated)"
              // required
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="specifications"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Specifications (comma-separated)
            </label>
            <input
              type="text"
              id="specifications"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Product Specifications (comma-separated)"
              // required
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          {error && (
            <span className="text-red-500 block mt-2">
              {error}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
