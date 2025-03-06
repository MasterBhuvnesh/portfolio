import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_buttons qualification_active button--flex"
                : "qualification_buttons button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_buttons qualification_active button--flex"
                : "qualification_buttons button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_active qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Programming Languages</h3>
                <span className="qualification_subtitle">
                  Programiz & W3School
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Cloud Networking</h3>
                <span className="qualification_subtitle">
                  Amazon Web Services
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Data Structure & OS </h3>
                <span className="qualification_subtitle">
                  Online learning platforms and resources.
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                {/* <span className="qualification_line"></span> */}
              </div>
              <div>
                <h3 className="qualification_title">
                  {" "}
                  Artificial Intelligence
                </h3>
                <span className="qualification_subtitle">
                  Coursera & other learning platforms
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Competitive events</h3>
                <span className="qualification_subtitle">
                  Hackathons and coding competitions
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Python Developer</h3>
                <span className="qualification_subtitle">As a Intern</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> May 2023 - July 2023
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Freelancer </h3>
                <span className="qualification_subtitle">
                  Delving into new technologies and engaging in project work
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                {/* <span className="qualification_line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
