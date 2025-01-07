import React from 'react';
import "../styles/Hero.css"
import hero from "../imges/background/hero_setup.avif"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div id="img">
        <img src={hero} alt="" />
      </div>
      <div id="hero_text">
      <h1 id="hero_h1">Welcome </h1>
      <p>Hi, I'm Ali Al-Taweel, web developer specializing in React and front-end development.</p>
      </div>
    </section>
  );
};

export default Hero;
