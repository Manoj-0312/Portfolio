import React from "react";
import './Navbar.css';
import logo from "./../assets/images/miladicode.png";
import black from "./../assets/videos/blackhole.mp4"
import { motion } from "framer-motion";

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};


const Navbar = () => {
  return (
    <>

    <motion.header
    initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="left">
        <img src={logo} alt="Logo"/>
        <h1 className="gradient">Manoj R</h1>
      </div>
      <ul>
      {["Home", "About", "Skills", "Projects"].map((text, i) => (
    <motion.li
      key={text}
      variants={navItemVariants}
      initial="hidden"
      animate="show"
      transition={{ delay: i * 0.2 }}
    >
      <a href={`#${text.toLowerCase()}`}>{text}</a>
    </motion.li>
  ))}
      </ul>
      <div className="box-icons">
      <a href="https://github.com/manoj-0312" target="_blank"><i className='bx bxl-github'></i></a>
      <a href="https://www.linkedin.com/in/manoj-r-3056062a4/"><i className='bx bxl-linkedin' ></i></a>
      </div>
    </motion.header>
    <div className="blackhole-box">
    <video src={black} typeof="video/mp4" autoPlay loop muted playsInline></video>

    </div>
    </>

  );
};

export default Navbar;
