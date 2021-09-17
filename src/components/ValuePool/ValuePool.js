import React from "react";
import PoolLogo from "../../Assets/Images/pool.png";
import styles from "./valuepool.module.scss";

const ValuePool = () => {
  return (
    <div className={styles.valuePool}>
      <div className={styles.valuePoolTitle}>
        <img src={PoolLogo} alt="Pool" />
        <p>VALUE pool data coming soon!</p>
      </div>

      <div>
              <p>Subscribe to updates:</p>
              
              <div></div>
      </div>
    </div>
  );
};

export default ValuePool;
