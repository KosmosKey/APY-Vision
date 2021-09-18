import React from "react";
import styles from "./headerstats.module.scss";

// Content Header Component
const ContentHeader = () => {
  return (
    <div className={styles.contentHeader}>
      <div className={styles.contentInfoContainer}>
        <h2>Current Market</h2>
      </div>
      <div className={styles.contentPrice}>
        <h1>$12312</h1>
        <p>+123</p>
      </div>
    </div>
  );
};

export default ContentHeader;
