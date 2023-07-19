import React from "react";
import styles from "./Navbar.module.css";

const hrf = "/";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.navLink} href={hrf}>
        Home
      </a>
      <a
        className={styles.navLink}
        href="https://github.com/SandeepKrSuman/weatherpedia"
      >
        OpenSource
      </a>
      <a className={styles.navLink} href="https://openweathermap.org/api">
        API
      </a>
      <a
        className={styles.navLink}
        href="https://www.linkedin.com/in/sandeepkrsuman/"
      >
        Developer
      </a>
    </nav>
  );
}
