import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Vue", "JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS"],
    color: "#D70321" // Crimson
  },
  {
    title: "Backend & DBA",
    skills: [".NET Core", "C#", "RESTful APIs", "Microservices", "Java", "Spring", "MSSQL", "PostgreSQL", "Firebase"],
    color: "#2A2A2A" // Espresso
  },
  {
    title: "Mobile App",
    skills: ["Flutter", "Dart", "Swift", "Riverpod", "GetX", "Provider"],
    color: "#CBA058" // Gold
  },
  {
    title: "Architecture & DevOps",
    skills: ["MVVM", "SOLID", "Atomic Design", "Azure DevOps", "GitLab CI/CD"],
    color: "#5A4D4A" // Brown
  }
];

const Skills = () => {
  const { ref: skillsRef, inView } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="skills-section" ref={skillsRef} style={{ padding: '8rem 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3rem, 8vw, 8rem)",
            color: "var(--text)",
            margin: "0",
            textTransform: "uppercase",
            lineHeight: 0.9
          }}>
            TECHNICAL <span style={{ color: "var(--secondary)" }}>ARSENAL</span>
          </h2>
          <p style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            AI-Assisted Development via Cursor, Windsurf & Copilot
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: 'transparent',
                border: `4px solid ${category.color}`,
                borderRadius: '30px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              <h3 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: '2rem',
                color: category.color,
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {category.skills.map((skill, i) => (
                  <span key={i} style={{
                    backgroundColor: category.color === '#FBF5E7' ? '#2A2A2A' : category.color,
                    color: '#FBF5E7',
                    padding: '0.5rem 1rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
