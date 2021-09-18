import React from "react";
import styles from "./sidebar.module.scss";
import Logo from "../../Assets/Images/Logo.png";
import Arrow from "../Logo/Icons/Arrow";

// Sidebar component
const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
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
  );
};

export default Sidebar;
