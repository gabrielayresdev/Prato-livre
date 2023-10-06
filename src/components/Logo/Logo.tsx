import spoon from "../../assets//logo/Spoon.svg";
import circle from "../../assets//logo/Ellipse 1.svg";
import fork from "../../assets//logo/Fork.svg";
import styles from "./Logo.module.sass";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo_image}>
        <img src={spoon} />
        <img src={circle} />
        <img src={fork} />
      </div>
      <h2 className={styles.logo_text}>Prato livre</h2>
    </div>
  );
};

export default Logo;
