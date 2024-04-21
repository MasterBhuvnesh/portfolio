import React from "react";
import "./about.css";
import AboutImg from "../../Assets/assets/About.jpeg";
import CV from "../../Assets/assets/CV.pdf";
import Info from "./info";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My Introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          <Info />

          <p className="about_description">
          I am Bhuvnesh Verma, a dedicated Python programmer proficient in Data Structures, Web Development, Machine Learning, AI, and Competitive Programming. I am enthusiastic about connecting with like-minded professionals who are passionate about growth and collaboration in these domains.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV  

          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
