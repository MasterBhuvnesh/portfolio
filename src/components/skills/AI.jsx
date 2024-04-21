import React from "react";
import "./skills.css";

const AI = () => {
  return (
    <div>
      <div className="skills_content">
        <h3 className="skills_title">Artifical Intelligence</h3>

        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Tensorflow</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">R</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">PyTorch</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Matplotlib</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
