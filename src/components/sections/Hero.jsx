import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import anime from "animejs";
import "../../styles/Hero.css";

const Hero = () => {
  const [, setIsVisible] = useState(false);
  const nameRef = useRef(null);
  const heroVisualRef = useRef(null);
  const backgroundShapesRef = useRef(null);

  useEffect(() => {
    // Force visibility immediately after component mount
    setIsVisible(true);

    // Anime.js animations

    // Animate the name with a text effect
    if (nameRef.current) {
      // Create animation for the name with a gradient wave
      anime({
        targets: nameRef.current,
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        easing: "easeInOutQuad",
        duration: 7000,
        loop: true,
        direction: "alternate",
      });
    }

    // Create floating background shapes
    if (backgroundShapesRef.current) {
      anime({
        targets: ".background-shape",
        translateX: function () {
          return anime.random(-15, 15) + "rem";
        },
        translateY: function () {
          return anime.random(-15, 15) + "rem";
        },
        scale: function () {
          return anime.random(1, 1.5);
        },
        rotate: function () {
          return anime.random(-45, 45);
        },
        opacity: [0.2, 0.4, 0.2],
        easing: "easeInOutQuad",
        duration: 8000,
        delay: anime.stagger(200),
        loop: true,
        direction: "alternate",
      });
    }

    // Animate tech items with different timing
    anime({
      targets: ".tech-item",
      scale: [1, 1.2, 1],
      backgroundColor: [
        { value: "rgba(var(--primary-rgb), 0.1)" },
        { value: "rgba(var(--primary-rgb), 0.3)" },
        { value: "rgba(var(--primary-rgb), 0.1)" },
      ],
      borderRadius: ["20%", "50%", "20%"],
      easing: "easeInOutSine",
      duration: 4000,
      delay: anime.stagger(100),
      loop: true,
      direction: "alternate",
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero-section">
      {/* Background animated shapes */}
      <div className="background-shapes" ref={backgroundShapesRef}>
        <div className="background-shape shape1"></div>
        <div className="background-shape shape2"></div>
        <div className="background-shape shape3"></div>
        <div className="background-shape shape4"></div>
        <div className="background-shape shape5"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1 className="hero-title" variants={fadeInUp}>
            <motion.span className="greeting" variants={fadeInUp}>
              Hello, I'm
            </motion.span>
            <motion.span className="name" ref={nameRef} variants={fadeInUp} style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 'min(10vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              Berkay Acar
            </motion.span>
            <motion.span className="title" variants={fadeInUp} style={{
              fontSize: '1.5rem',
              color: 'var(--text-light)',
              fontWeight: 500,
              marginTop: '0.5rem'
            }}>
              Architecting Digital Experiences
            </motion.span>
          </motion.h1>
          <motion.p
            className="hero-description"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ 
              maxWidth: "600px",
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "var(--text-light)",
              marginTop: "1.5rem"
            }}
          >
            I transform complex puzzles into elegant code. With a passion for 
            fullstack excellence and a creative eye for design, I build 
            solutions that are as functional as they are striking.
          </motion.p>
          <motion.div
            className="hero-actions"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          ref={heroVisualRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="tech-orbit"
            animate={{ rotate: 360 }}
            style={{ display: "flex", maxWidth: "100%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="tech-circle">
              {[
                "React",
                ".NET",
                "Flutter",
                "TypeScript",
                "C#",
                "JavaScript",
                "Redux",
                "Bloc",
                "Riverpod",
                "Azure",
                "SQL",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="tech-item"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: "var(--primary)",
                    color: "blue",
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                  }}
                  style={{
                    boxSizing: "border-box",
                    maxWidth: "90%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -20],
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.2, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <motion.div
          className="mouse"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;
