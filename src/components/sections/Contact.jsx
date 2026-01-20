import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "../../styles/Contact.css";

const Contact = () => {
  const { ref: contactRef, inView } = useScrollAnimation(0.1);
  const form = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: "" });
    }
  };

  const validate = () => {
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = "İsim gerekli";
    }

    if (!formValues.email) {
      errors.email = "Email gerekli";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Geçersiz email adresi";
    }

    if (!formValues.message.trim()) {
      errors.message = "Mesaj gerekli";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setSubmitError(false);

      // Replace with your EmailJS service ID, template ID, and Public Key
      emailjs
        .sendForm(
          "service_2c34twd", // Replace with your EmailJS service ID
          "template_shupg9w", // Replace with your EmailJS template ID
          form.current,
          "LRPIFnctd9hAFxQmT", // Replace with your EmailJS public key
        )
        .then((result) => {
          console.log("Email successfully sent!", result.text);
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormValues({ name: "", email: "", subject: "", message: "" });

          // Reset success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          setIsSubmitting(false);
          setSubmitError(true);

          // Reset error message after 5 seconds
          setTimeout(() => {
            setSubmitError(false);
          }, 5000);
        });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="container">
        <div className="contact-container grid-cols-2">
          <motion.div
            className="contact-info"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className="contact-intro"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">Get in Touch</h2>

              <h3>Thinking about a project?</h3>
              <p>
                Whether you have a project idea, want to propose a job
                opportunity, or simply say hello, feel free to reach out. I’ll
                get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              className="contact-methods"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {[
                { icon: "✉️", title: "Email", text: "acar.berkai@gmail.com" },
                { icon: "📱", title: "Phone", text: "+90 554 428 04 04" },
                { icon: "📍", title: "Location", text: "İstanbul, Bostancı" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    x: inView ? 0 : -20,
                  }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.div
                    className="contact-icon"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: inView ? 1 : 0,
                  y: inView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {[
                  { url: "https://github.com/Berkawaii", icon: <FiGithub /> },
                  {
                    url: "https://www.linkedin.com/in/im-berkay/",
                    icon: <FiLinkedin />,
                  },

                  { url: "mailto:acar.berkai@gmail.com", icon: <FiMail /> },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="social-icon">{social.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitSuccess ? (
              <motion.div
                className="success-message card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Teşekkürler! 🎉
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
                  yapacağım.
                </motion.p>
              </motion.div>
            ) : submitError ? (
              <motion.div
                className="error-message card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Üzgünüm! ❌
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra
                  tekrar deneyin veya doğrudan mail atın.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                className="contact-form card"
                ref={form}
                onSubmit={handleSubmit}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                <motion.div className="form-group" variants={fadeIn}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className={formErrors.name ? "error" : ""}
                  />
                  {formErrors.name && (
                    <span className="error-message">{formErrors.name}</span>
                  )}
                </motion.div>

                <motion.div className="form-group" variants={fadeIn}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={formErrors.email ? "error" : ""}
                  />
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </motion.div>

                <motion.div className="form-group" variants={fadeIn}>
                  <label htmlFor="subject">Subject (optional)</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formValues.subject}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div className="form-group" variants={fadeIn}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formValues.message}
                    onChange={handleChange}
                    className={formErrors.message ? "error" : ""}
                  ></textarea>
                  {formErrors.message && (
                    <span className="error-message">{formErrors.message}</span>
                  )}
                </motion.div>

                <motion.button
                  type="submit"
                  className={`btn btn-primary submit-btn ${
                    isSubmitting ? "submitting" : ""
                  }`}
                  disabled={isSubmitting}
                  variants={fadeIn}
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
