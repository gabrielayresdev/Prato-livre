import React from "react";
import styles from "./Portion.module.sass";
import minus from "/src/assets/icons/Minus.svg";
import plus from "/src/assets/icons/Plus.svg";

interface IPortion {
  name: string;
  weight: number;
}

const Portion = ({ name, weight }: IPortion) => {
  const [amount, setAmount] = React.useState<number>(0);

  function increasePortion() {
    setAmount(amount + 1);
  }

  function decreasePortion() {
    if (amount - 1 >= 0) setAmount(amount - 1);
  }

  return (
    <div className={styles.portion}>
      <div className={styles.left_side}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.weight}>{weight}</p>
      </div>

      <div className={styles.right_side}>
        <button
          onClick={decreasePortion}
          aria-label={`Diminuir uma porção. Quantidade selecionada: ${amount}`}
        >
          <img src={minus} />
        </button>
        <span className={styles.amount}>{amount}</span>
        <button
          onClick={increasePortion}
          aria-label={`Aumentar uma porção. Quantidade selecionada: ${amount}`}
        >
          <img src={plus} />
        </button>
      </div>
    </div>
  );
};

export default Portion;
