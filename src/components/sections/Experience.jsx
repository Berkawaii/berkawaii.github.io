import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const experiences = [
  {
    role: "Software Developer",
    company: "Düzey",
    period: "Nov 2023 - Present",
    points: [
      "Led the strategic migration and modernization of legacy Java/Angular projects into high-performance .NET and React architectures.",
      "Spearheaded UniCoWallet development, achieving a 75% reduction in field operation paperwork.",
      "Architected cross-platform B2B and Sales Engine mobile applications using Flutter and .NET Core.",
      "Developed a dynamic Approval Management System ensuring end-to-end workflow traceability."
    ]
  },
  {
    role: "Jr. Developer",
    company: "Düzey",
    period: "Nov 2021 – Oct 2022",
    points: [
      "Optimized SAP ERP and SFA workflows by identifying bottlenecks and implementing strategic process improvements.",
      "Boosted overall team performance metrics by 40% through digital process integration.",
      "Modernized legacy business logic for seamless data flow between SAP systems and mobile sales apps."
    ]
  },
  {
    role: "Intern Developer",
    company: "Başarsoft",
    period: "Jun 2021 – Sept 2021",
    points: [
      "Developed interactive map applications using JavaScript and OpenLayers to visualize complex geospatial data."
    ]
  }
];

const Experience = () => {
  const { ref: expRef, inView } = useScrollAnimation(0.1);

  return (
    <section id="experience" className="experience-section" ref={expRef} style={{ padding: '8rem 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="title-header-flex"
        >
          <h2 style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(3rem, 8vw, 8rem)",
            color: "var(--primary)",
            margin: "0",
            textTransform: "uppercase",
            lineHeight: 0.9
          }}>
            CAREER<br/>ARCHIVE
          </h2>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2021 - Present</span>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="experience-grid"
            >
              <div>
                <h3 style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: '2rem',
                  color: 'var(--text)',
                  margin: '0 0 0.5rem 0',
                  textTransform: 'uppercase'
                }}>{exp.role}</h3>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.5rem' }}>{exp.company}</div>
                <div style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', fontWeight: 600 }}>{exp.period}</div>
              </div>
              
              <div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{
                      position: 'relative',
                      paddingLeft: '1.5rem',
                      lineHeight: 1.6,
                      fontSize: '1.1rem',
                      fontWeight: 500,
                      color: 'var(--text)'
                    }}>
                      <span style={{
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: '10px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--primary)',
                        borderRadius: '50%'
                      }}></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
