import React from "react";
import styles from "./TablePool.module.scss";
import Ethereum from "../../Assets/Images/Eth.png";
import Coin from "../../Assets/Images/Coin.png";
import cs from "classnames";
import NumberFormat from "react-number-format";

// Pools component
// Children for table body in TablePool component
const Pools = ({ data }) => {
  // Gained Value
  const gainedValue = (data.totalValueUsd * data.netGainUsd) / 100;

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
          {data.tokens.slice(0, 2).map((token) => (
            <div key={token.tokenAddress} className={styles.poolToken}>
              <p>
                {token.tokenStartingBalance.toFixed(2)} -{" "}
                {token.tokenCurrentBalance.toFixed(2)} {token.tokenName}
              </p>
              <span
                className={cs({ [styles.inactive]: token.tokenUsdGain < 0 })}
              >
                {token.tokenCurrentBalance.toFixed(2)} {token.tokenName}&nbsp;
                {token.tokenUsdGain > 0 && "+"}
                {token.tokenUsdGain.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </td>
      <td>
        <div className={styles.poolFarming}>
          <p>{data.name}</p>
          <span>${data.totalFeeUsd.toFixed(2)}</span>
        </div>
      </td>
      <td>
        <div className={styles.poolGain}>
          <NumberFormat
            thousandSeparator={true}
            prefix={"$"}
            displayType={"text"}
            value={`${data && data.totalValueUsd.toFixed(2)}`}
            className={styles.currentAvailable}
          />
          <span
            className={cs({
              [styles.inactive]: data.netGainUsd.toFixed(2) < 0,
            })}
          >
            {data.netGainUsd.toFixed(2) > 0 && "+"}
            {data.netGainUsd.toFixed(2)}
            %&nbsp;(
            {data.netGainUsd.toFixed(2) > 0 && "+"}
            <NumberFormat
              value={`${data && gainedValue.toFixed(2)}`}
              thousandSeparator={true}
              prefix={"$"}
              displayType={"text"}
              className={cs(styles.currentGainedPool, {
                [styles.inactive]: data.netGainUsd.toFixed(2) < 0,
              })}
            />
            )
          </span>
        </div>
      </td>
      <td className={styles.poolGainButtonTable}>
        <div className={styles.poolButtons}>
          <button className={styles.stats}>Pool Stats</button>
          <button className={styles.details}>View Details</button>
        </div>
      </td>
    </tr>
  );
};

export default Pools;
