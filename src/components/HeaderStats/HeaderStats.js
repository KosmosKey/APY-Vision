import React from "react";
import { connect } from "react-redux";
import ContentHeader from "./ContentHeader";
import styles from "./headerstats.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useMedia } from "react-use";

const HeaderStats = ({ data }) => {
  // Array of header stats data
  const headerData = [
    { name: "Current Market Value (USD)", price: data && data.totalValueUsd },
    { name: "Gas Fees + Exit Transactions", price: data && data.totalFeeUsd },
    { name: "Liquidity Pool Gains", price: data && data.netGainUsd },
    { name: "Net Market Gains", price: data && data.netGainPct },
  ];

  const isMaxWidth1050px = useMedia("(max-width:1050px)");

  return (
    <div className={styles.headerStats}>
      {!isMaxWidth1050px ? (
        headerData.map((data, index) => (
          <ContentHeader key={index} price={data.price} name={data.name} />
        ))
      ) : (
        <Carousel>
          {headerData.map((data, index) => (
            <ContentHeader key={index} price={data.price} name={data.name} />
          ))}
        </Carousel>
      )}
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
