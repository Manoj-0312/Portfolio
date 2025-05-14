import React from "react";
import "./InfoSection.css";
import glob from "./../assets/videos/glob.mp4";
import myPhoto1 from "./../assets/images/grid1.png";
import myPhoto2 from "./../assets/images/grid2.png";
import myPhoto4 from "./../assets/images/grid4.png";
import Button from "../assets/components/Button";

function InfoSection() {
  return (
    <>

      <div className="info-section">
        <h1 className="section-title autoDisplay"> Hello , there 👋</h1>
        <div className="info-cards">
          <div className="card">
            <h1>Hi ,there , I'm Manoj </h1>
            <p>
              I'm a software developer with a passion for building scalable and
              efficient software solutions .
            </p>
            <img src={myPhoto1} alt="card-img"></img>
          </div>

          <div className="card">
            <h1>Tech stack </h1>
            <p>
              I'm a software developer with a passion for building scalable and
              efficient software solutions .
            </p>
            <img src={myPhoto2} alt="card-img"></img>
          </div>

          <div className="card">
            <h1>tech stack 2 </h1>
            <p>
              I'm a software developer with a passion for building scalable and
              efficient software solutions .
            </p>
            <video
              src={glob}
              autoPlay
              muted
              playsInline
              loop
              typeof="video/mp4"
            ></video>
            <Button text="Contact Me" icons="bx-link-external" />
          </div>

          <div className="card">
            <h1>Tech stack </h1>
            <p>
              I'm a software developer with a passion for building scalable and
              efficient software solutions .
            </p>
            <img src={myPhoto4} alt="card-img"></img>
          </div>
        </div>
      </div>

    </>
  );
}

export default InfoSection;
