import React from "react";
import "./Skills.css";
import brain from "./../assets/images/digital brain.png";
import _1 from "./../assets/images/1.png";
import _2 from "./../assets/images/2.png";
import _3 from "./../assets/images/3.png";
import _4 from "./../assets/images/4.png";
import _5 from "./../assets/images/5.png";
import _6 from "./../assets/images/6.png";
import _7 from "./../assets/images/7.png";
import _8 from "./../assets/images/8.png";
import _9 from "./../assets/images/9.png";

const Skills = () => {
  const images = [_1, _2, _3, _4, _5, _6, _7, _8, _9];
const quantity = images.length;
  return (
    <>
      <section className="skills-section">
        <h1 className="section-title autoDisplay">My skills</h1>
        <div className="skills-box">
          <img className="skills-image" src={brain} />
          <div className="designer autoDisplay">
            <h1 className="gradient">
              {" "}
              Designer <i className="bx bx-laptop"></i>
            </h1>
            <p>loremsnchhcz kjbisufhdiuz n uichauisgfuaf byifgefhe </p>
          </div>

          <div className="coder autoDisplay">
            <h1 className="gradient">
              {" "}
              Coder <i className="bx bx-code-block"></i>
            </h1>
            <p>loremsnchhcz kjbisufhdiuz n uichauisgfuaf byifgefhe </p>
          </div>

          <div
            className="slider"
            reverse={true}
            style={{
              "--width": "100px",
              "--height": "100px",
              "--quantity": 9,
            }}
          >
            

<div className="list">
  {images.map((src, index) => {
    const delay = (10 / quantity) * index - 10; // total 10s animation loop
    return (
      <div
        className="item"
        style={{ animationDelay: `${delay}s` }}
        key={index}
      >
        <img src={src} alt={`item-${index}`} />
      </div>
    );
  })}
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
