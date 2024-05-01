import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContent}>
        <Link to="/" className={styles.link}>
          <h4>Adventure Trails FD</h4>
        </Link>
      </div>
      <div className={styles.rightContent}>
        <a href="https://www.linkedin.com/in/lucasplcorrea/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <span className={styles.linkedinIcon}></span>
        </a>
        <a href="https://github.com/lucasplcorrea" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <span className={styles.githubIcon}></span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
