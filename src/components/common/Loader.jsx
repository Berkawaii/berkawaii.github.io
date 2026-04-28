import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--primary)', // Crimson background for impact
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(5rem, 25vw, 20rem)",
          lineHeight: 0.8,
          color: "var(--background)", // Cream color text
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          textAlign: 'center',
          mixBlendMode: 'normal'
        }}
      >
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          BERKAY
        </motion.div>
        
        <div style={{ color: "var(--secondary)" }}>ACAR</div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        style={{
          marginTop: '3rem',
          width: '200px',
          height: '6px',
          backgroundColor: 'var(--background)',
          transformOrigin: 'left'
        }}
      />
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ marginTop: '1rem', fontFamily: "'Inter', sans-serif", fontWeight: 800, letterSpacing: '0.2em', color: 'var(--background)' }}
      >
        INITIATING
      </motion.div>
    </motion.div>
  );
};

export default Loader;
