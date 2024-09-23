import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero-Section/Hero";
import Program from "./components/programs/Program";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact-us/Contact";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>

        <Program></Program>
        <About></About>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus></Campus>
        <Title subTitle='TESTIMONIALS' title='What students says'/>
        <Testimonials></Testimonials>
        <Title subTitle='Contact us' title='Get in Touch'/>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default App;
