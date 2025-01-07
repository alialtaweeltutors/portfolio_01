import React from 'react';
import "../styles/Hero.css"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div id="img">
        <img src="/imges/background/hero_setup.avif" alt="" />
      </div>
      <div id="hero_text">
      <h1 id="hero_h1">Welcome </h1>
      <p>Hi, I'm a web developer specializing in React and front-end development.</p>
      </div>
    </section>
  );
};

export default Hero;
