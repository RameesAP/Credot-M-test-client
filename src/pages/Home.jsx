import React from "react";
import Slider from "../components/Slider";
import Posters from "../components/Posters";
import HomePageProducts from "../components/HomePageProducts";
import TopBrands from "../components/TopBrands";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <Posters />
      <HomePageProducts />
      <TopBrands />
      <Footer />
    </div>
  );
};

export default Home;
