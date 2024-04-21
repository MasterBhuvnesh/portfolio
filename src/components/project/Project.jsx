import React from "react";
import "./project.css";
import AboutImg from "../../Assets/assets/pro.jpg";
function Project() {
  return (
    <section className="about section" id="project">
      <h2 className="section_title">Project</h2>
      <span className="section_subtitle">Each project is a unique piece of development</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="project_img" />
        <div className="about_data">
        <h1 className="project_title">Quotique</h1>
          <p className="about_description">
          Quotique: Wisdom in Words <br /> <br />
          It's a web application built using HTML, CSS, and JavaScript, with MongoDB Atlas serving as the online database. API connections are utilized to seamlessly link the application to the MongoDB Atlas Cloud Database, facilitating efficient data management and retrieval. This setup ensures a robust and reliable foundation for the application, enhancing user experiences and overall performance.
          </p>

          <a href="https://masterbhuvnesh.github.io/Quote/" className="button button--flex"  target="_blank">
            Live Demo 
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default Project;
// Each project is a unique piece of development