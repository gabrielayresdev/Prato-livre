import Logo from "../Logo/Logo";
import styles from "./Menu.module.sass";

const Menu = () => {
  return (
    <header className={styles.header}>
      <div className={styles.menu_controller}></div>
      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className={styles.nav_container}>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Cardápio</li>
            <li className={styles.button_li}>
              <button className={styles.button}>Marmitas</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Menu;
