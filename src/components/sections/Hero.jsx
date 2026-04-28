import React from "react";
import { motion } from "framer-motion";
import "../../styles/Hero.css";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '80px', // for navbar
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          style={{ textAlign: 'center' }}
        >
          <motion.h1 
            className="hero-title" 
            variants={fadeInUp}
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(3rem, 15vw, 15rem)",
              lineHeight: 0.9,
              color: "var(--primary)",
              margin: "0",
              letterSpacing: "0.02em",
              textTransform: "uppercase"
            }}
          >
            BERKAY<br/>ACAR
          </motion.h1>
          
          <motion.div variants={fadeInUp} style={{ marginTop: '2rem' }}>
            <span style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--secondary)'
            }}>
              Fullstack Developer & Solutions Architect
            </span>
          </motion.div>

          <motion.p
            className="hero-description"
            variants={fadeInUp}
            style={{ 
              maxWidth: "600px",
              margin: "2rem auto",
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--text-light)",
            }}
          >
            I transform complex business puzzles into elegant code. Specializing in modernizing systems and enterprise mobility with React, .NET Core, and Flutter.
          </motion.p>
          
          <motion.div
            className="hero-actions"
            variants={fadeInUp}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem', flexWrap: 'wrap' }}
          >
            <a href="#projects" className="btn btn-primary" style={{
              backgroundColor: 'var(--text)',
              color: 'var(--background)',
              padding: '1rem 3rem',
              borderRadius: '50px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline" style={{
              borderColor: 'var(--text)',
              color: 'var(--text)',
              padding: '1rem 3rem',
              borderRadius: '50px',
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '0.1em'
            }}>
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--secondary)' }}>Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ width: '2px', height: '40px', backgroundColor: 'var(--primary)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
