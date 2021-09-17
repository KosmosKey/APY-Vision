import React from "react";
import PoolLogo from "../../Assets/Images/pool.png";
import { Discord, Dots, Mail, Twitter } from "../Logo/Icons";
import styles from "./valuepool.module.scss";

const ValuePool = () => {
  return (
    <div className={styles.valuePool}>
      <div className={styles.valuePoolTitle}>
        <img src={PoolLogo} alt="Pool" />
        <p>VALUE pool data coming soon!</p>
      </div>

      <div className={styles.valuePoolUpdates}>
        <p>Subscribe to updates:</p>
        <Dots />
        <Discord />
        <Twitter />
        <Mail />
      </div>
    </div>
  );
};

export default ValuePool;
