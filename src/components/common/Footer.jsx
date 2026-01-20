import React from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--card-bg);
  color: var(--text);
  padding: 3rem 0;
  margin-top: auto;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: var(--text);
  font-size: 1.5rem;
  transition: var(--transition);

  &:hover {
    color: var(--primary);
    transform: translateY(-5px);
  }
`;

const Copyright = styled.p`
  color: var(--text-light);
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: var(--text);
  text-decoration: none;

  &:hover {
    color: var(--primary);
  }
`;

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);

  span {
    color: var(--text);
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContainer className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Logo>
            Berkay<span>Acar</span>
          </Logo>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/im-berkay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com/berkawaii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </SocialLink>
            <SocialLink href="mailto:acar.berkai@gmail.com">
              <FiMail />
            </SocialLink>
          </SocialLinks>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Copyright>© {year} Berkay Acar. All rights reserved.</Copyright>
        </motion.div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
