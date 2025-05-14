import React from "react";
import "./ProjectCard.css";
import bear from "./../images/2.png";
import Button from "./Button";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";


const cardVariants = {
  hidden: (reversed) => ({
    opacity: 0,
    x: reversed ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function ProjectCard({
  image,
  title,
  subtitle,
  description,
  author,
  date,
  tags = [],
  reversed,
}) {
  return (
    <motion.div
  className={`project-card ${reversed ? "reversed" : ""}`}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={cardVariants}
  custom={reversed}
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 100 }}
>
  {reversed ? (
    <>
      <div className="project-info">
        <motion.h1 className="gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {title || "Project title 1"}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {description || "Lorem ipsum Lorem ipsum..."}
        </motion.p>
        <div className="project-card-buttons">
          <Button icons="bx-link-external" text="Website" />
          <Button icons="bxl-github" text="GitHub" />
        </div>
      </div>

      <div className="project-img">
        <motion.div variants={floatingAnimation} animate="animate">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={300}
          >
            <img className="" src={image || bear} alt="Project" />
          </Tilt>
        </motion.div>
      </div>
    </>
  ) : (
    <>
      <div className="project-img">
        <motion.div variants={floatingAnimation} animate="animate">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.05}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={300}
          >
            <img className="" src={image || bear} alt="Project" />
          </Tilt>
        </motion.div>
      </div>

      <div className="project-info">
        <motion.h1 className="gradient" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {title || "Project title 1"}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          {description || "Lorem ipsum Lorem ipsum..."}
        </motion.p>
        <div className="project-card-buttons">
          <Button icons="bx-link-external" text="Website" />
          <Button icons="bxl-github" text="GitHub" />
        </div>
      </div>
    </>
  )}
</motion.div>

  );
}

export default ProjectCard;
