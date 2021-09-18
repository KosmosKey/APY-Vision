import React from "react";
import { connect } from "react-redux";
import { ArrowRightOutlined } from "../Logo/Icons";
import Pools from "./Pools";
import styles from "./TablePool.module.scss";

// Table Pool Component
const TablePool = ({ data }) => {
  return (
    <div className={styles.tablePool}>
      <div className={styles.tablePoolTitle}>
        <h1>Your current pools</h1>
        <h2>
          View Exited pools <ArrowRightOutlined />
        </h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>Pool Name</th>
            <th>Tokens entered → current</th>
            <th>Farming rewards</th>
            <th>LP gains / Net market gains</th>
          </tr>
        </thead>
        <tbody>
          {data && data.userPools.map((pool) => <Pools data={pool} />)}
        </tbody>
      </table>
    </div>
  );
};

// Map State To Props
// Getting State from Reducer
const mapStateToProps = (state) => {
  const { pool } = state;
  return {
    data: pool.poolData,
  };
};

// Connecting Map State To Props with component TablePool
export default connect(mapStateToProps)(TablePool);
