import React from "react";
import { connect } from "react-redux";
import ContentHeader from "./ContentHeader";
import styles from "./headerstats.module.scss";

const HeaderStats = ({ data }) => {
  return (
    <div className={styles.headerStats}>
      <ContentHeader
        price={data && data.totalValueUsd}
        name="Current Market Value (USD)"
      />
      <ContentHeader
        price={data && data.totalFeeUsd}
        name="Gas Fees + Exit Transactions"
      />
      <ContentHeader
        price={data && data.netGainUsd}
        name="Liquidity Pool Gains"
      />
      <ContentHeader price={data && data.netGainPct} name="Net Market Gains" />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pool } = state;
  return {
    data: pool.poolData,
  };
};

export default connect(mapStateToProps)(HeaderStats);
