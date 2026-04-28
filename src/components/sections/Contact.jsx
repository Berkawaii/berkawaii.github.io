import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Contact = () => {
  const { ref: contactRef, inView } = useScrollAnimation(0.1);

  return (
    <section id="contact" ref={contactRef} style={{ padding: '8rem 0', backgroundColor: 'var(--text)', color: 'var(--background)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
           transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3rem, 10vw, 10rem)",
            color: "var(--primary)",
            margin: "0 0 2rem 0",
            textTransform: "uppercase",
            lineHeight: 0.9
          }}>
            LET'S TALK
          </h2>
          <p style={{ fontSize: '1.4rem', maxWidth: '600px', margin: '0 auto 4rem auto', color: '#ccc' }}>
            Interested in building highly efficient, elegant systems? Let’s get in touch.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <a href="mailto:acar.berkai@gmail.com" style={{
              display: 'inline-block',
              padding: '1rem 3rem',
              backgroundColor: 'var(--primary)',
              color: 'var(--background)',
              textDecoration: 'none',
              fontFamily: "'Anton', sans-serif",
              fontSize: '2rem',
              letterSpacing: '0.05em',
              borderRadius: '50px',
              textTransform: 'uppercase'
            }}>Email Me</a>

            <a href="tel:+905544280404" style={{
              display: 'inline-block',
              padding: '1rem 3rem',
              backgroundColor: 'transparent',
              color: 'var(--background)',
              border: '4px solid var(--background)',
              textDecoration: 'none',
              fontFamily: "'Anton', sans-serif",
              fontSize: '2rem',
              letterSpacing: '0.05em',
              borderRadius: '50px',
              textTransform: 'uppercase'
            }}>Call Me</a>
          </div>

          <div style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/Berkawaii" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', color: 'var(--secondary)', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/im-berkay/" target="_blank" rel="noreferrer" style={{ fontSize: '1.2rem', color: 'var(--secondary)', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
