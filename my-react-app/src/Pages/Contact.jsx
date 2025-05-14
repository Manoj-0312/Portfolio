import React from "react";
import { motion } from "framer-motion";
import Button from "../assets/components/Button";
import "./Contact.css";
import { createFloatVariant } from "./Float"; 

const Contact = () => {
  return (
    <>
      <section className="contact-section">

        <h1 className="section-title autoDisplay">Let's Talk</h1>
      

        <motion.div
          className="social-box autoBlur"
          variants={createFloatVariant()}
          animate="animate"
        >
          <motion.a
            variants={createFloatVariant()}
            animate="animate"
            whileHover={{ scale: 1.1 }}
          >
            <i className="bx bxs-phone-call" /> +91 8660489766
          </motion.a>
          <motion.a
            variants={createFloatVariant()}
            animate="animate"
            whileHover={{ scale: 1.1 }}
          >
            <i className="bx bxl-telegram" /> Telegram
          </motion.a>
          <motion.a
            variants={createFloatVariant()}
            animate="animate"
            whileHover={{ scale: 1.1 }}
          >
            <i className="bx bxl-linkedin-square" /> LinkedIn
          </motion.a>
          <div className="social-icons">
            <motion.a
              variants={createFloatVariant()}
              animate="animate"
              whileHover={{ scale: 1.2 }}
            >
              <i className="bx bxl-youtube"></i>
            </motion.a>
            <motion.a
              variants={createFloatVariant()}
              animate="animate"
              whileHover={{ scale: 1.2 }}
            >
              <i className="bx bxl-twitter"></i>
            </motion.a>
            <motion.a
              variants={createFloatVariant()}
              animate="animate"
              whileHover={{ scale: 1.2 }}
            >
              <i className="bx bxl-facebook-circle"></i>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="contact-box autoBlur"
          variants={createFloatVariant()}
          animate="animate"
        >
          <motion.p variants={createFloatVariant()} animate="animate">
            Thank you for your inquiry about my services. I’d love to connect!
          </motion.p>
          <motion.p variants={createFloatVariant()} animate="animate">
            Full Name
          </motion.p>
          <motion.input
            type="text"
            placeholder="Your full name"
            variants={createFloatVariant()}
            animate="animate"
          />
          <motion.p variants={createFloatVariant()} animate="animate">
            Email
          </motion.p>
          <motion.input
            type="email"
            placeholder="Your Email"
            variants={createFloatVariant()}
            animate="animate"
          />
          <motion.p variants={createFloatVariant()} animate="animate">
            Message
          </motion.p>
          <motion.input
            type="text"
            className="input-message"
            placeholder="Your Message"
            variants={createFloatVariant()}
            animate="animate"
          />
          <motion.div variants={createFloatVariant()} animate="animate">
            <Button icons="bx-send" text="Send message" />
          </motion.div>
        </motion.div>
      </section>

      <footer>
        <motion.h1 variants={createFloatVariant()} animate="animate">
          © Manoj — Made with 🫶 in Space
        </motion.h1>
      </footer>
    </>
  );
};

export default Contact;
