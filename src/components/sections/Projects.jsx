import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FaGithub, FaGooglePlay, FaApple, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Cruwell's Vox",
    description: "Real-time voice collaboration platform powered by LiveKit SFU, Firebase, React, and Electron.",
    tech: ["React", "Electron", "Firebase", "LiveKit"],
      bgColor: "#D70321", // Crimson
    color: "#FBF5E7",
    rotate: 3,
    links: {
      github: "https://github.com/Berkawaii/Cruwell-s-Vox",
      live: "https://cruwellsvox.web.app/"
    }
  },
  {
    title: "Dipo",
    description: "Comprehensive B2B & B2C integrated marketplace application. Delivering dynamic catalogs and robust sales infrastructure.",
    tech: ["Flutter", "Dart", "Firebase", "Azure", ".Net", "Nopcommerce"],
    bgColor: "#F5A623", // Mustard Yellow
    color: "#2A2A2A",
    rotate: -1,
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.duzey.dipo&hl=tr",
      appstore: "https://apps.apple.com/tr/app/dipo/id6745765259?l=tr",
      live: "https://duzeymarket.com/"
    }
  },
  {
    title: "Chastity",
    description: "Interactive online museum platform providing seamless exhibition exploration with high-performance digital displays.",
    tech: ["React", "JavaScript", "CSS"],
     bgColor: "#CBA058", // Gold
    color: "#2A2A2A",
    rotate: -2,
    links: {
      github: "https://github.com/Berkawaii/chastity",
      live: "https://berkawaii.github.io/chastityWeb/"
    }
  },
  {
    title: "Gri",
    description: "Digital underground fashion archive.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion", "Lenis"],
   bgColor: "#2A2A2A", // Dark Espresso
    color: "#FBF5E7",
    rotate: 1,
    links: {
      live:"https://griarchive.web.app/"
    }
  }
];  

const Projects = () => {
  const { ref: projectsRef, inView } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="projects-section" ref={projectsRef} style={{ padding: '8rem 0', backgroundColor: 'var(--background)', overflow: 'hidden' }}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(4rem, 10vw, 10rem)",
            color: "var(--text)",
            margin: "0 0 4rem 0",
            textTransform: "uppercase",
            textAlign: "center",
            letterSpacing: "0.02em"
          }}>
            SELECTED <span style={{ color: "var(--primary)" }}>WORKS</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', padding: '2rem 0' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={inView ? { 
                opacity: 1, 
                scale: 1, 
                rotate: project.rotate 
              } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
              style={{
                backgroundColor: project.bgColor,
                color: project.color,
                borderRadius: '30px',
                padding: '3rem',
                border: '4px solid var(--text)',
                boxShadow: '10px 10px 0px var(--text)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <h3 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: '2.5rem',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                textTransform: 'uppercase'
              }}>{project.title}</h3>
              
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.6',
                flexGrow: 1,
                marginBottom: '2rem',
                fontWeight: 500
              }}>{project.description}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
                {project.tech.map((t, i) => (
                  <span key={i} style={{
                    backgroundColor: project.color,
                    color: project.bgColor,
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>{t}</span>
                ))}
              </div>

              {/* Action Links */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: 'auto', borderTop: `2px solid ${project.color}`, paddingTop: '1.5rem' }}>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ color: project.color, fontSize: '1.8rem', display: 'flex', alignItems: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="View on GitHub">
                    <FaGithub />
                  </a>
                )}
                {project.links.playstore && (
                  <a href={project.links.playstore} target="_blank" rel="noopener noreferrer" style={{ color: project.color, fontSize: '1.8rem', display: 'flex', alignItems: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Get it on Google Play">
                    <FaGooglePlay />
                  </a>
                )}
                {project.links.appstore && (
                  <a href={project.links.appstore} target="_blank" rel="noopener noreferrer" style={{ color: project.color, fontSize: '1.8rem', display: 'flex', alignItems: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="Download on the App Store">
                    <FaApple />
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ color: project.color, fontSize: '1.6rem', display: 'flex', alignItems: 'center', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="View Live App">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
