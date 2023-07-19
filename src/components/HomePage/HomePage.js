import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <MainLayout />
    </div>
  );
}
