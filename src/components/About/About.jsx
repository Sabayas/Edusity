import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3> ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, laborum
          reiciendis dolorem ipsa, nihil vitae, recusandae ab molestiae
          voluptatum libero eveniet nisi iure voluptate quisquam officia
          incidunt facilis? Suscipit, odio natus fugiat omnis alias laborum
          inventore iusto amet illo eligendi.
        </p>
      </div>
    </div>
  );
};

export default About;
