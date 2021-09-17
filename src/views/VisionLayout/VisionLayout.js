import React from "react";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import styles from "./visionlayout.module.scss";

const VisionLayout = () => {
  return (
    <div className={styles.visionLayout}>
      <Sidebar />
      <Content />
    </div>
  );
};

export default VisionLayout;
