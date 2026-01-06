import React from "react";
import  Carousel from "../components/Carousel"; 
import StoryContainer from "../components/story/StoryContainer";


const Home = () => {
  return (
    <div className="home-page">
      <Carousel/>
      <StoryContainer/>
    </div>
  );
};

export default Home;
