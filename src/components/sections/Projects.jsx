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
      title: "Dipo (Düzey Market)",
      description:
        "Developed and launched a Flutter-based mobile app integrated with a NopCommerce web platform for Düzey Market. Enabled barcode scanning, stock checks, and personalized features. Led the full release process for both app stores, using REST APIs for real-time data from the NopCommerce backend.",
      image: "dipo.png",
      category: ["mobile", "web"],
      link: "https://duzeymarket.com",
      appStore: "https://apps.apple.com/tr/app/dipo/id6745765259",
      playStore: "https://play.google.com/store/apps/details?id=com.duzey.dipo",
      tech: ["React", "Flutter", ".NET", "RESTful API", "NopCommerce"],
      video: "https://www.youtube.com/embed/FJ6DWvuHG3Q?si=CVYtj2LPN5nD03fG",
    },
    {
      id: 2,
      title: "UniCoWallet",
      description:
        "Built an e-commerce and product management solution with a Flutter mobile app and NopCommerce web backend. The app enables barcode scanning, stock checks, and personalized features. Led the end-to-end mobile launch on Google Play and App Store, using REST APIs for real-time integration with NopCommerce.",
      image: "unicowallet.png",
      category: ["mobile", "web"],
      link: "https://unicowallet.duzey.com.tr/",
      appStore: "",
      playStore:
        "https://play.google.com/store/apps/details?id=com.duzey.masraf&hl=en",
      tech: ["Flutter", "Firebase", "RESTful API", "Riverpod"],
      video: "https://youtube.com/embed/-RH5tXgyy4w?si=a7133OZg7R-GrCSo",
    },
    {
      id: 3,
      title: "SATURUN",
      description:
        "Developed a field productivity app for mobile sales and operations teams with offline-first architecture. Involved in feature design, UI/UX, bug fixing, local storage, and deep linking. Collaborated via Jira and Git, and managed CI/CD deployments.",
      image: "saturun.webp",
      category: ["mobile"],
      video: "https://www.youtube.com/embed/c4ZKxuEKKzM?si=M712YgzYo4Ko6DgW",
      link: "",
      tech: [
        "React",
        ".NET",
        "Postgre",
        "NopCommerce",
        "Flutter",
        "RESTful API",
        "Firebase",
        "Bloc",
      ],
    },
    {
      id: 4,
      title: "DDR (Dynamic Delivery Routing)",
      description:
        "AI-powered smart route prediction system that optimized delivery paths and reduced vehicle usage by 50%.",
      image: "ddr-system.png",
      category: ["web"],
      link: "",
      tech: ["Angular", "TypeScript", "Java", "Python"],
    },
    {
      id: 5,
      title: "Sun Management System",
      description:
        "Comprehensive management solution for all your business operations",
      image: "sun.png",
      category: ["web"],
      link: "https://sun-frontend.azurewebsites.net/login",
      tech: [
        "React",
        "TypeScript",
        ".Net",
        "MSSQL",
        "RESTful API",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
      ],
    },
    {
      id: 6,
      title: "Adventurer's Ledger",
      description:
        "fantasy-themed mobile application designed to help you manage your characters in Dungeons & Dragons and similar tabletop role-playing games. Easily track your characters' attributes, abilities, equipment, and stories all in one place.",
      image: "adventurersLedger.png",
      category: ["mobile"],
      link: "",
      github: "https://github.com/Berkawaii/AdventurersLedger",
      tech: [
        "Flutter",
        "RESTful API",
        "Firebase",
        "Open5e",
        "Dart",
        "Git",
        "CI/CD",
        "Android",
        "iOS",
      ],
    },
    {
      id: 7,
      title: "Chastity",
      description:
        "The goal of this project is to create a cross-platform app using Flutter and Europeana APIs, offering users a virtual museum experience. Art lovers can explore, search, and view cultural heritage objects, save favorites, and build personal collections—making art more accessible and immersive from any device.",

      image: "chastity_logo.png",
      category: ["mobile"],
      link: "",
      github: "https://github.com/Berkawaii/chastity",
      tech: [
        "Flutter",
        "RESTful API",
        "Firebase",
        "Europeana API",
        "Dart",
        "Git",
        "CI/CD",
        "Android",
        "iOS",
      ],
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
