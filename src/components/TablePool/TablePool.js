import React, { useState } from "react";
import { connect } from "react-redux";
import { ArrowLeft, ArrowRight, ArrowRightOutlined, Info } from "../Logo/Icons";
import Pools from "./Pools";
import styles from "./TablePool.module.scss";

// Table Pool Component
const TablePool = ({ data }) => {
  const [total, setTotal] = useState(0);

  // Slice function for mapping array
  const slicer = data && data.userPools.slice(total, total + 4);

  const sliceArrayForward = () => {
    if (total !== slicer.length) {
      setTotal(total + 1);
    }
  };

  const sliceArrayBack = () => {
    if (total !== 0) {
      setTotal(total - 1);
    }
  };

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
            <th>Current Fee</th>
            <th>
              LP gains /{" "}
              <span>
                Net market gains <Info />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            slicer.map((pool) => (
              <Pools key={pool.lastSyncBlock} data={pool} />
            ))}
        </tbody>
      </table>

      <div className={styles.tablePoolPages}>
        <p>
          Using real time market price quotes. Thank you for being a pro member
        </p>
        <div className={styles.tablePoolPageNavigate}>
          <ArrowLeft
            fill={total !== 0 ? "#6B57B8" : "#ECE8FA"}
            onClick={sliceArrayBack}
          />
          Page {total} of {slicer?.length}
          <ArrowRight
            fill={total !== slicer?.length ? "#6B57B8" : "#ECE8FA"}
            onClick={sliceArrayForward}
          />
        </div>
      </div>
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
