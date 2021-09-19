import React from "react";
import styles from "./content.module.scss";
import AddressLogo from "../../Assets/Images/addressLogo.png";
import { ArrowDown } from "../Logo/Icons";
import { connect } from "react-redux";

const AddressContent = ({ data }) => {
  return (
    <div className={styles.contentAddress}>
      <img src={AddressLogo} alt="address_logo" />
      <p>{data && data.address}</p>
      <ArrowDown />
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

// Connecting mapStateToProps and mapDispatchToProps with Content component
export default connect(mapStateToProps)(AddressContent);
