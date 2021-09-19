// Importing components
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPoolData } from "../../api";
import { GET_DATA } from "../../redux/actions";
import HeaderStats from "../HeaderStats/HeaderStats";
import styles from "./content.module.scss";
import TablePool from "../TablePool/TablePool";
import AddressContent from "./AddressContent";
import { useMedia } from "react-use";
import classNames from "classnames";
import Loader from "react-loader-spinner";

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

  // Max Width of 635px (Mobile)
  const isMaxWidth635px = useMedia("(max-width:635px)");

  // Content Overview
  return (
    <div className={styles.content}>
      <div className={classNames("container", { "flex-position": loading })}>
        {loading ? (
          <Loader type="TailSpin" color="#6B57B8" />
        ) : (
          <>
            <div className={styles.contentPoolTitle}>
              <h1>Your liquidity pool positions:</h1>
              {!isMaxWidth635px && <AddressContent />}
            </div>

            <HeaderStats />
            <TablePool />
          </>
        )}
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
