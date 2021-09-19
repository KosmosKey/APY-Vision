import React from "react";
import styles from "./sidebar.module.scss";
import Logo from "../../Assets/Images/Logo.png";
import Arrow from "../Logo/Icons/Arrow";
import { connect } from "react-redux";
import classNames from "classnames";
import { TOGGLE_NAVBAR } from "../../redux/actions";

// Sidebar component
const Sidebar = ({ nav, toggleNavbar }) => {
  return (
    <>
      <div
        className={classNames(styles.sideBar, {
          [styles.active]: nav,
        })}
      >
        <img src={Logo} alt="Logo" />

        <div className={styles.sideBarMainList}>
          <ul>
            <li className={styles.active}>
              <Arrow /> Dashboard
            </li>
            <li>Pools</li>
          </ul>
        </div>

        <div className={styles.sideBarMenuInformation}>
          <ul>
            <li>FAQ</li>
            <li>Blog</li>
            <li>Support us</li>
          </ul>
        </div>
      </div>
      <div
        className={classNames(styles.overlay, { [styles.active]: nav })}
        onClick={() => toggleNavbar()}
      />
    </>
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
    toggleNavbar: () => dispatch({ type: TOGGLE_NAVBAR }),
  };
};

// Connecting mapStateToProps and mapDispatchToProps with Sidebar component
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
