import React from "react";
import styles from "./headerstats.module.scss";
import { Info } from "../../components/Logo/Icons";
import NumberFormat from "react-number-format";

// Content Header Component
const ContentHeader = ({ price, gain, name }) => {
  return (
    <div className={styles.contentHeader}>
      <div className={styles.contentInfoContainer}>
        <h2>{name}</h2>
        <Info />
      </div>
      <div className={styles.contentPrice}>
        <NumberFormat
          value={`${price && price.toFixed(2)}`}
          thousandSeparator={true}
          prefix={"$"}
          displayType={"text"}
        />

        {gain && (
          <NumberFormat
            value={`${gain && gain.toFixed(2)}`}
            thousandSeparator={true}
            prefix={"$"}
            displayType={"text"}
            className={styles.gainPrice}
          />
        )}
      </div>
    </div>
  );
};

export default ContentHeader;
