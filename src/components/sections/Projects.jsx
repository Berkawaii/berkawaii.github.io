import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { generateProjectImage } from "../../utils/imageGenerator";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import VideoPopup from "../common/VideoPopup";
import "../../styles/Projects.css";

const Projects = () => {
  const { ref: projectsRef, inView } = useScrollAnimation(0.1);
  const [filter, setFilter] = useState("all");
  const [videoPopup, setVideoPopup] = useState({
    isOpen: false,
    videoUrl: "",
    title: "",
  });

  const openVideoPopup = (videoUrl, title) => {
    setVideoPopup({
      isOpen: true,
      videoUrl,
      title,
    });
  };

  const closeVideoPopup = () => {
    setVideoPopup({
      isOpen: false,
      videoUrl: "",
      title: "",
    });
  };

  const projects = [
    {
      id: 1,
      title: "Maestro",
      description:
        "Comprehensive Help Desk and SLA Management system. Features advanced ticket tracking, automated due date calculations, and interactive reporting dashboards with multi-language support.",
      image: "maestro.png",
      category: ["web"],
      link:"https://berkawaii.github.io/Maestro/",
      github: "https://github.com/Berkawaii/Maestro",
      tech: ["React", ".NET", "PostgreSQL", "Docker", "SLA Engine"],
    },
    {
      id: 2,
      title: "PladisAuto",
      description:
        "Internal automation and workflow optimization platform. Streamlining complex organizational processes through intelligent automation and real-time data sync.",
      image: "pladis.png",
      category: ["web"],
      link:"https://berkawaii.github.io/PladisAuto/",
      github: "https://github.com/Berkawaii/PladisAuto",
      tech: ["React", "Node.js", "GitHub Actions", "Automation"],
    },
    {
      id: 3,
      title: "Voltran AI Editor",
      description:
        "AI-powered image manipulation tool. Leverages advanced models for intelligent editing, background removal, and artistic transformations in the browser.",
      image: "voltran.png",
      category: ["web"],
      link:"https://voltran-ai-image-editor.web.app/",
      github: "https://github.com/Berkawaii/Voltran-Ai-Image-Editor",
      tech: ["React", "AI/ML", "Canvas API", "Framer Motion"],
    },
    {
      id: 4,
      title: "Dipo (Düzey Market)",
      description:
        "NopCommerce integrated mobile app with barcode scanning and real-time stock management. Published on both iOS and Android stores with high user engagement.",
      image: "dipo.png",
      category: ["mobile", "web"],
      link: "https://duzeymarket.com",
      appStore: "https://apps.apple.com/tr/app/dipo/id6745765259",
      playStore: "https://play.google.com/store/apps/details?id=com.duzey.dipo",
      tech: ["Flutter", ".NET", "RESTful API", "NopCommerce"],
    },
    {
      id: 5,
      title: "UniCoWallet",
      description:
        "Digital expense management solution with a Flutter mobile app, JHipster backend & SAP integration.",
      image: "unicowallet.png",
      category: ["mobile", "web"],
      link: "https://unicowallet.duzey.com.tr/",
      playStore: "https://play.google.com/store/apps/details?id=com.duzey.masraf&hl=en",
      tech: ["Flutter", "JHipster", "RESTful API", "Riverpod"],
    },
    {
      id: 6,
      title: "SATURUN",
      description:
        "Field productivity app for mobile sales and operations teams with offline-first architecture. Features local storage and deep linking.",
      image: "saturun.webp",
      category: ["mobile"],
      tech: ["React", ".NET", "Postgre", "Flutter", "Firebase", "Bloc"],
    },
    {
      id: 7,
      title: "Sinflix",
      description:
        "High-performance streaming platform clone. Focuses on cinematic UI transitions, lazy loading of high-resolution media, and responsive design systems.",
      image: "sinflix.png",
      category: ["web"],
      github: "https://github.com/Berkawaii/Sinflix",
      tech: ["React", "TMDB API", "Styled Components", "Vite"],
    },
    {
      id: 8,
      title: "Adventurer's Ledger",
      description:
        "Fantasy character manager for tabletop RPGs. Track attributes, equipment, and spells with a custom тематический UI designed for immersive gaming sessions.",
      image: "adventurersLedger.png",
      category: ["mobile"],
      github: "https://github.com/Berkawaii/AdventurersLedger",
      tech: ["Flutter", "Firebase", "Open5e", "Dart"],
    },
    {
      id: 9,
      title: "DDR (Delivery Routing)",
      description:
        "AI-powered smart route prediction system that optimized delivery paths and reduced vehicle usage by 50%.",
      image: "ddr-system.png",
      category: ["web"],
      tech: ["Angular", "TypeScript", "Java", "Python"],
    },
    {
      id: 10,
      title: "Chastity",
      description:
        "Virtual museum experience using Flutter and Europeana APIs. Art lovers can explore and build personal collections.",
      image: "chastity_logo.png",
      category: ["mobile"],
      github: "https://github.com/Berkawaii/chastity",
      tech: ["Flutter", "Europeana API", "Firebase", "Dart"],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects" className="projects-section" ref={projectsRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["all", "web", "mobile"].map((category, index) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? "active" : ""}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              {category === "all"
                ? "All"
                : category === "web"
                  ? "Web"
                  : "Mobile"}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                exit="exit"
                custom={index}
                layout
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 30px var(--shadow)",
                }}
              >
                <div className="project-img-container">
                  {project.image ? (
                    <>
                      <div className="image-wrapper">
                        <motion.img
                          className="project-img"
                          src={`/images/projects/${project.image}`}
                          alt={project.title}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      </div>
                      {project.video && (
                        <motion.button
                          className="video-play-button"
                          onClick={() =>
                            openVideoPopup(project.video, project.title)
                          }
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <FaPlay />
                        </motion.button>
                      )}
                    </>
                  ) : null}
                  <motion.div
                    className="project-img-placeholder"
                    style={{
                      display: project.image ? "none" : "flex",
                      background: generateProjectImage(
                        project.title,
                        project.category,
                      ).background,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {
                      generateProjectImage(project.title, project.category)
                        .letter
                    }
                  </motion.div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.category.includes("mobile") &&
                      (project.appStore || project.playStore) && (
                        <motion.span
                          className="mobile-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          Mobile App
                        </motion.span>
                      )}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <motion.div
                    className="project-tech"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="project-links">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiExternalLink /> <span>Web</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiGithub /> <span>GitHub</span>
                      </motion.a>
                    )}

                    {project.category.includes("mobile") && (
                      <>
                        <div className="app-store-links">
                          {project.appStore && (
                            <motion.a
                              href={project.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link app-store-link"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                            >
                              <FaAppStore /> <span>App Store</span>
                              <div className="store-badge ios">iOS</div>
                            </motion.a>
                          )}
                          {project.playStore && (
                            <motion.a
                              href={project.playStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link play-store-link"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.3 }}
                            >
                              <FaGooglePlay /> <span>PlayStore</span>
                              <div className="store-badge android">Android</div>
                            </motion.a>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <VideoPopup
        isOpen={videoPopup.isOpen}
        videoUrl={videoPopup.videoUrl}
        title={videoPopup.title}
        onClose={closeVideoPopup}
      />
    </section>
  );
};

export default Projects;
