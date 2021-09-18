import React from "react";
import styles from "./TablePool.module.scss";
import Ethereum from "../../Assets/Images/Eth.png";
import Coin from "../../Assets/Images/Coin.png";

// Pools component
// Children for table body in TablePool component
const Pools = ({ data }) => {
  return (
    <tr className={styles.pool}>
      <td>
        <div className={styles.poolName}>
          <div className={styles.poolImage}>
            <img src={Coin} alt="coin" />
            <img src={Ethereum} alt="ethereum" />
          </div>
          <div className={styles.poolNameInfo}>
            <p>{data.name}</p>
            <span>{data.poolProviderKey}</span>
          </div>
        </div>
      </td>
      <td>
        <div className={styles.poolCurrentToken}>
          <div className={styles.poolToken}>
            <p>400 - 460 LINK</p>
            <span>+59.99 LINK (+$745.75)</span>
          </div>
          <div className={styles.poolToken}>
            <p>400 - 460 LINK</p>
            <span>+59.99 LINK (+$745.75)</span>
          </div>{" "}
        </div>
      </td>
      <td>
        <div className={styles.poolFarming}>
          <p>2.98 SUSHI</p>
          <span>48.800</span>
        </div>
      </td>
      <td>
        <div className={styles.poolGain}>
          <p>$11,434.63</p>
          <span>+0.58% (+$67.16)</span>
        </div>
      </td>
      <td>
        <div className={styles.poolButtons}>
          <button className={styles.stats}>Pool Stats</button>
          <button className={styles.details}>View Details</button>
        </div>
      </td>
    </tr>
  );
};

export default Pools;
