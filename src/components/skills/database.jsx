import React from "react";
import "./skills.css";

const Database = () => {
  return (
    <div>
      <div className="skills_content">
        <h3 className="skills_title">Database</h3>

        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">MongoDB</h3>
                <span className="skills_level">Advance</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">MySql</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">SQL</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Pandas </h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Database;
