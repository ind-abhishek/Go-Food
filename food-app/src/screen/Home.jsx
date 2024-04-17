import React, { useEffect,useState } from "react";
import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import Card from "../component/Card";
import CarouselContainer from "../component/CarouselContainer";

const Home = () => {

  const [foodCat, setFoodCat] = useState{ []};
  const [foodItem, setFoodCat] = useState{ []};

  const loadData = async () => {
    let response = await fatch("http://localhost:5000/api/foodData", method: "POST",
      Headers: {
      'Content-Type': "application/json"
    }) 
    
    response = await response.json();
    setfoodItems(response[0])
    setfoodCat(response[1])
    // console.log(response[0], response[1])
    
  }

  useEffect(() => {
    loadData()
  },[])







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

      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
