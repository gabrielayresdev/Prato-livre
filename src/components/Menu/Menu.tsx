import Logo from "../Logo/Logo";
import styles from "./Menu.module.sass";
import React from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  console.log(isOpen);
  return (
    <header className={styles.header}>
      <div className={styles.menu_controller}>
        <div
          className={`${styles.menu_icon} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div
        className={`${styles.nav_container} ${
          isOpen ? styles.enabled : styles.disabled
        }`}
      >
        <nav className={styles.nav}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Cardápio principal</a>
            </li>
            <li>
              <a>Bebidas</a>
            </li>
            <li>
              <a>Sobremesas</a>
            </li>
            <li className={styles.button_li}>
              <a className={styles.button}>Marmitas</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
