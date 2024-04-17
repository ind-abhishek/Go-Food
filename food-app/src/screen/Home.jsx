import React, { useEffect,useState } from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import Card from "../component/Card";
import CarouselContainer from "../component/CarouselContainer";

const Home = () => {

  const [foodCat, setFoodCat] = useState{ []};
  const [foodItem, setFoodCat] = useState{ []};

  const loaData = async () => {
  let response = await fatch
  }









  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <CarouselContainer />
      </div>
      <div className="m-3 d-inline">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
