import React from "react";
import Frontend from "./frontend";
import Backend from "./backend";
import Database from "./database";
import AI from "./AI";
import "./skills.css";

const Skills = () => {
  return (
    <section
      className="skills section"
      id="skills"
    >
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical level</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
        <Database />
        <AI />
      </div>
    </section>
  );
};

export default Skills;
