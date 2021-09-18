import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPoolData } from "../../api";
import { GET_DATA } from "../../redux/actions";
import HeaderStats from "../HeaderStats/HeaderStats";
import styles from "./content.module.scss";

// Content component
const Content = ({ getPoolData }) => {
  // Use State hooks
  const [loading, setLoading] = useState(true);

  // Function which will fetch data
  // With loaders
  const fetchData = async () => {
    setLoading(true);
    const response = await fetchPoolData();
    getPoolData(response.data);
    setLoading(false);
  };

  // useEffect Hook
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.contentPoolTitle}>
          <h1>Your liquidity pool positions:</h1>

          <span>Connect Wallet</span>
        </div>

        <HeaderStats />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { pool } = state;
  return {
    data: pool,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPoolData: (data) => dispatch({ type: GET_DATA, data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
