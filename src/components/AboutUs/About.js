import React from "react";
import "./About.css";

/* importing images here......! */
import Technical from "../../assets/Icons/techinicalSkills.svg";
import Communication from "../../assets/Icons/communication.svg";
import SelfLearning from "../../assets/Icons/selfLearning.svg";
import InnerStrength from "../../assets/Icons/innerStrength.svg";

export default function About() {
  return (
    <div className="about-page">
      {/* ........................................our aim start's form here ....!........................................*/}

      <div className="about-page-section">
        <div className="about-page-section-title">Our Aim</div>
        <div className="about-page-section-description">
          “Smart Education, a Concept that Describes learning in digital age.it
          enables learner to learn more effectively, efficiently, flexibly and
          comfortably.”
        </div>
      </div>
      {/* ........................................our features start's form here ....!........................................*/}
      <div className=" about-page-section about-page-features-section">
        <div className="about-page-section-title">Our Features</div>
        <div className="about-page-features-content">
          <div className="about-page-features-content-section">
            <div className="about-page-features-card">
              <img src={Technical} className="about-page-features-card-image" />
              <div className="about-page-features-card-content">
                <div className="about-page-features-card-title">
                  Technical skills
                </div>
                <div className="about-page-features-card-des">
                  .Programming,Development
                </div>
              </div>
            </div>
            <div className="about-page-features-card">
              <img
                src={Communication}
                className="about-page-features-card-image"
              />
              <div className="about-page-features-card-content">
                <div className="about-page-features-card-title">
                  Technical skills
                </div>
                <div className="about-page-features-card-des">
                  .Programming,Development
                </div>
              </div>
            </div>
          </div>
          <div className="about-page-features-content-section">
            <div className="about-page-features-card">
              <img
                src={SelfLearning}
                className="about-page-features-card-image"
              />
              <div className="about-page-features-card-content">
                <div className="about-page-features-card-title">
                  Technical skills
                </div>
                <div className="about-page-features-card-des">
                  .Programming,Development
                </div>
              </div>
            </div>
            <div className="about-page-features-card">
              <img
                src={InnerStrength}
                className="about-page-features-card-image"
              />
              <div className="about-page-features-card-content">
                <div className="about-page-features-card-title">
                  Technical skills
                </div>
                <div className="about-page-features-card-des">
                  .Programming,Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ........................................our developers start's form here ....!........................................*/}
        <div className="about-page-section">
          <div className="about-page-section-title">Our Aim</div>
          <div className="about-page-section-description">
            “Smart Education, a Concept that Describes learning in digital
            age.it enables learner to learn more effectively, efficiently,
            flexibly and comfortably.”
          </div>
        </div>



    </div>
  );
}
