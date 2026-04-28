import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Education = () => {
  const { ref: eduRef, inView } = useScrollAnimation(0.1);

  return (
    <section id="education" className="education-section" ref={eduRef} style={{ padding: '8rem 0', backgroundColor: 'var(--text)', color: 'var(--background)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '5rem', borderBottom: '2px solid var(--secondary)', paddingBottom: '2rem' }}
        >
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3rem, 8vw, 8rem)",
            color: "var(--background)",
            margin: "0",
            textTransform: "uppercase",
            lineHeight: 0.9
          }}>
            EDUCATION <span style={{ color: "var(--secondary)" }}>&</span> AWARDS
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '2rem', color: 'var(--secondary)', marginBottom: '2rem', textTransform: 'uppercase' }}>Academic</h3>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--background)' }}>Computer Programming</h4>
              <p style={{ fontSize: '1.1rem', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Piri Reis University</p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--background)' }}>Management Information Systems</h4>
              <p style={{ fontSize: '1.1rem', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Anadolu University</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem', textTransform: 'uppercase' }}>Certifications</h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {["SAP Commerce Cloud Development", "Java & Spring Web Development", "Angular", "IIBA® Business Analysis", "Scrum INC. Agile", "Flutter, Dart, UI/UX Design"].map((cert, i) => (
                <li key={i} style={{ fontSize: '1.1rem', fontWeight: 500, paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: '2rem', color: 'var(--secondary)', marginBottom: '2rem', textTransform: 'uppercase' }}>Awards</h3>
            <div style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--background)' }}>Sahne Senin – Digital Transformation Contributor</h4>
              <p style={{ fontSize: '0.9rem', color: '#ccc', letterSpacing: '0.1em' }}>Düzey, 2022</p>
            </div>
            <div style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid var(--primary)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.3rem', color: 'var(--background)' }}>Sahne Senin – Team Collaboration Award</h4>
              <p style={{ fontSize: '0.9rem', color: '#ccc', letterSpacing: '0.1em' }}>Düzey, 2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
