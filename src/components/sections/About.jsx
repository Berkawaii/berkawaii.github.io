import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "../../styles/About.css";

const About = () => {
  const { ref: aboutRef, inView } = useScrollAnimation(0.1);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="about-section" ref={aboutRef} style={{ padding: '8rem 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="responsive-grid"
        >
          <motion.div variants={fadeIn} style={{ position: 'relative' }}>
            <h2 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(3rem, 8vw, 8rem)",
              lineHeight: 0.9,
              color: "var(--text)",
              margin: "0 0 2rem 0",
              textTransform: "uppercase"
            }}>
              CRAFTING<br/>
              <span style={{ color: "var(--primary)" }}>DIGITAL</span><br/>
              EXPERIENCES
            </h2>
            <div style={{
              width: '100px',
              height: '8px',
              backgroundColor: 'var(--secondary)',
              marginBottom: '3rem'
            }}></div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <p style={{
              fontSize: "1.4rem",
              lineHeight: "1.8",
              color: "var(--text)",
              marginBottom: "1.5rem",
              fontWeight: 500
            }}>
              I am a versatile fullstack developer with over 4 years of experience, specializing in modernizing legacy systems and designing seamless cross-platform architectural solutions.
            </p>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              color: "var(--text-light)",
              marginBottom: "3rem"
            }}>
              My expertise spans across React, .NET Core, and Flutter. I'm passionate about efficiency, proven by my track record of building digital wallets and field operation management apps that significantly reduce administrative friction.
            </p>
            
            <div className="stats-grid">
              {[
                { number: "4+", text: "Years Experience" },
                { number: "15+", text: "Enterprise Projects" },
                { number: "75%", text: "Efficiency Gain" },
                { number: "100%", text: "Passion for UI" },
              ].map((stat, index) => (
                <div key={index} style={{
                  borderTop: '2px solid var(--border)',
                  borderBottom: '2px solid var(--border)',
                  padding: '1.5rem 0',
                  textAlign: 'center'
                }}>
                  <h3 style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: '3rem',
                    color: 'var(--primary)',
                    margin: '0 0 0.5rem 0'
                  }}>{stat.number}</h3>
                  <p style={{
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    margin: 0,
                    color: 'var(--text)'
                  }}>{stat.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
