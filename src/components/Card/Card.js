import React from "react";
import styles from "./Card.module.css";

// A small box to display the weather data.
// Heading at the top displays the key and the body displays the value at the bottom.

export default function Card(props) {
  return (
    <div className={styles.card}>
      <span className={styles.heading}>{props.heading}</span>
      <br />
      <span className={styles.body}>{props.body}</span>
    </div>
  );
}
