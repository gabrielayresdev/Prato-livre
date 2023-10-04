import React from "react";
import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.button}></div>
      <div className={styles.logo_wrapper}>PRATO LIVRE</div>
      <div className={styles.nav_container}>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Cardápio</li>
            <li>
              <button className={styles.button}>Marmita</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
