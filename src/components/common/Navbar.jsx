import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiDownloadCloud, FiFileText } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: scrolled ? '1rem 2rem' : '2rem',
        backgroundColor: scrolled ? 'var(--background)' : 'transparent',
        borderBottom: scrolled ? '2px solid var(--text)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        fontFamily: "'Anton', sans-serif",
        fontSize: '2rem',
        color: 'var(--primary)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        cursor: 'pointer'
      }} onClick={() => window.scrollTo(0, 0)}>
        BA_
      </div>

      <nav className="nav-links">
        <div className="nav-text-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--text)',
                letterSpacing: '0.1em'
              }}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Icons always visible */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', borderLeft: '2px solid var(--text)', paddingLeft: '1.5rem' }} className="nav-mobile-icons">
          <a
            href="https://github.com/Berkawaii"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text)', fontSize: '1.5rem', display: 'flex', alignItems: 'center' }}
            title="GitHub Profile"
          >
            <FiGithub />
          </a>
          
          <div style={{ position: 'relative' }} ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary)',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                padding: 0
              }}
              title="Download CV"
            >
              <FiDownloadCloud />
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '1rem',
                    backgroundColor: 'var(--background)',
                    border: '2px solid var(--text)',
                    borderRadius: '10px',
                    boxShadow: '4px 4px 0px var(--text)',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: '220px',
                    overflow: 'hidden',
                    zIndex: 1001
                  }}
                >
                  <a
                    href="/resume/Berkay_Acar_Fullstack_Developer_Resume.pdf"
                    download
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      borderBottom: '1px solid var(--border)',
                      transition: 'background 0.2s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--border)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <FiFileText /> Fullstack CV
                  </a>
                  <a
                    href="/resume/Berkay_Acar_mobile_developer.pdf"
                    download
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'background 0.2s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--border)'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <FiFileText /> Mobile Developer CV
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
