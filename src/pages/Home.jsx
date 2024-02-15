import React from "react";
import Slider from "../components/Slider";
import Posters from "../components/Posters";
import HomePageProducts from "../components/HomePageProducts";
import TopBrands from "../components/TopBrands";

// import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Slider />
      <Posters />
      <HomePageProducts />
      <TopBrands />
      {/* <Carousel /> */}
    </div>
  );
};

export default Home;
