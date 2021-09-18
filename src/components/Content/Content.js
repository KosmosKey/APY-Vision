// Importing components
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPoolData } from "../../api";
import { GET_DATA } from "../../redux/actions";
import HeaderStats from "../HeaderStats/HeaderStats";
import styles from "./content.module.scss";
import AddressLogo from "../../Assets/Images/addressLogo.png";
import { ArrowDown } from "../Logo/Icons";
import TablePool from "../TablePool/TablePool";

// Content component
const Content = ({ getPoolData, data }) => {
  // Use State hooks
  // We will use loading before we get data
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

  // Content Overview
  return (
    <div className={styles.content}>
      <div className="container">
        <div className={styles.contentPoolTitle}>
          <h1>Your liquidity pool positions:</h1>

          <div className={styles.contentAddress}>
            <img src={AddressLogo} alt="address_logo" />
            <p>{data && data.address}</p>
            <ArrowDown />
          </div>
        </div>

        <HeaderStats />
        <TablePool />
      </div>
    </div>
  );
};

// Map State To Props
// Getting states from reducers (redux-saga)
const mapStateToProps = (state) => {
  const { pool } = state;
  return {
    data: pool.poolData,
  };
};

// Map Dispatch To Props
// Getting dispatch functions (redux-saga)
const mapDispatchToProps = (dispatch) => {
  return {
    getPoolData: (data) => dispatch({ type: GET_DATA, data }),
  };
};

// Connecting mapStateToProps and mapDispatchToProps with Content component
export default connect(mapStateToProps, mapDispatchToProps)(Content);
