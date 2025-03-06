import React from "react";
import "./project.css";
import AboutImg from "../../Assets/assets/project1.webp";
function Project() {
  return (
    <section
      className="about section"
      id="project"
    >
      <h2 className="section_title">Project</h2>
      <span className="section_subtitle">
        Each project is a unique piece of development
      </span>
      <div className="about_container container grid">
        <img
          src={AboutImg}
          alt=""
          className="project_img"
        />
        <div className="about_data">
          <h1 className="project_title">Carby Health</h1>
          <p className="about_description">
            Combining smart technology with inviting Clinics, Carbon Health
            delivers a uniquely seamless experience for both Medical
            Professionals and Patients through our Mobile Health Services,
            Virtual Care, Telemedicine, and in-person Clinics. Our mission is to
            make World-Class Healthcare Accessible to everyone.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.carbonhealth.patient.prod"
            className="button button--flex"
            target="_blank"
            rel="noreferrer"
          >
            Play Store
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
// Each project is a unique piece of development
