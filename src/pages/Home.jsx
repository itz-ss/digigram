import React from "react";
import WelcomeSection from "../components/welcome";
import CloudinaryVideoHero from "../components/video";
import  Carousel from "../components/Carousel"; 
import FirstPage from "../components/firstPage";
import SecondPage from "../components/secondPage";
import ThirdPage from "../components/ThirdPage";
import FourthPage from "../components/FourthPage";
import FifthPage from "../components/FifthPage";
import SixPage from "../components/SixPage";


const Home = () => {
  return (
    <div className="home-page">
      <Carousel/>
       <section className="snap-section">
      <FirstPage/>
      </section>
      <section className="snap-section">
      <SecondPage/>
      </section>
      <section className="snap-section">
      <ThirdPage/>
      </section>
      <section className="snap-section">
      <FourthPage/>
      </section>
      <section className="snap-section">
      <FifthPage/>
      </section>
      <section className="snap-section">
      <SixPage/>
      </section>
      {/* <CloudinaryVideoHero/> */}
      {/* <WelcomeSection /> */}
      {/* <ContactForm/> */}
    </div>
  );
};

export default Home;
