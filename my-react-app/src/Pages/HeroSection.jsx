import React from "react";
import "./HeroSection.css";
import Button from "../assets/components/Button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function HeroSection() {
  return (
    <>
      <div className="hero">
        <motion.div
          className="hero-info autoBlur"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="hero-info-title gradient"
            variants={childVariants}
          >
            <i className="bx bxl-sketch"></i> 
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
                "Data Science Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />{" "}
          </motion.div>

          <motion.h1 variants={childVariants}>
            Hello there 👋 , I am <span className="gradient">Manoj</span>, I am
            Passionate <span className="gradient">Data Science</span> Engineer
          </motion.h1>

          <motion.p variants={childVariants}>
            I'm a Frontend Developer. I have made a few projects on websites and
            mobile. Check out my skills and projects.
          </motion.p>

          <motion.div variants={childVariants}>
            <Button text="Contact me" icons="bx-send" />
            
          </motion.div>
          
        </motion.div>
        
        <div className="scroll-down"> </div>
      </div>
    </>
  );
}

export default HeroSection;
