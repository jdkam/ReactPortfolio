import React from "react";
import "./About.css";
import headshot from "../../assets/images/hero/jkamheadshot1x1-webp.webp";
import Typist from "react-typist";
import Typical from 'react-typical'
import "../../../node_modules/react-typist/dist/standalone/Typist.css"
const About = () => {
  return (
    <div id="About" className="about-wrapper">
      <div className="about-left-column font-hero text-white w-full font-poppins">
        <h1 className="hero-h1">Hey, I'm Jordan</h1>
        <p className="font-accent">
            I'm a {' '} <Typical
        steps={[
        'Developer', 3000,
        'Designer', 3000,
        'Computer Engineer', 3000,
        'Photographer', 3000,
        'Tech Enthusiast', 3000,
        'Blockchain Enthusiast', 3000]}
        loop={Infinity}
        wrapper="b"
      />
        </p>
      </div>
      <div className="about-right-column text-white font-poppins">
        <img className="hero-image " alt="heroimg" src={headshot} />
      </div>
    </div>
  );
};



export default About;
