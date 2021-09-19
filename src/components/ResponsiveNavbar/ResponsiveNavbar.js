import React from "react";
import { connect } from "react-redux";
import { TOGGLE_NAVBAR } from "../../redux/actions";
import AddressContent from "../Content/AddressContent";
import { Close, Menu } from "../Logo/Icons";
import styles from "./responsivenavbar.module.scss";

// Responsive Navbar component
const ResponsiveNavbar = ({ nav, toggleNavBar }) => {
  console.log(nav);
  return (
    <div className={styles.responsiveNavbar}>
      <div
        className={styles.responsiveNavbarMenu}
        onClick={() => toggleNavBar()}
      >
        {nav ? <Close /> : <Menu />}

        <p> {nav ? "Close" : "Menu"}</p>
      </div>

      <AddressContent />
    </div>
  );
};

// Map State To Props
// Getting states from reducers (redux-saga)
const mapStateToProps = (state) => {
  const { pool } = state;
  return {
    nav: pool.navBoolean,
  };
};

// Map Dispatch To Props
// Getting dispatch functions (redux-saga)
const mapDispatchToProps = (dispatch) => {
  return {
    toggleNavBar: () => dispatch({ type: TOGGLE_NAVBAR }),
  };
};

// Connecting mapStateToProps and mapDispatchToProps with ResponsiveNavbar component
export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveNavbar);
