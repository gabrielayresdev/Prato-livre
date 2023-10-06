import Logo from "../Logo/Logo";
import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menu_controller}>
        <div className={styles.menu_icon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className={styles.nav_container}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Cardápio</a>
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
