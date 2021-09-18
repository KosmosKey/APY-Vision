import React from "react";
import { connect } from "react-redux";
import ContentHeader from "./ContentHeader";
import styles from "./headerstats.module.scss";

const HeaderStats = () => {
  return (
    <div className={styles.headerStats}>
      <ContentHeader />
      <ContentHeader />
      <ContentHeader />
      <ContentHeader />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pool } = state;
  return {
    data: pool,
  };
};

export default connect(mapStateToProps)(HeaderStats);
