import React from "react";
import styles from "./Recomendations.module.sass";

interface IPlates {
  name: string;
  description: string;
  img: string;
  price: number;
}

const Recomendations = (plates: IPlates[]) => {
  return (
    <div>
      <p>Não sabe o que pedir? </p>
      <p>Experimente nossas marmitas prontas</p>

      <div className={styles.carousel}>
        {plates.map(({ name, description, img, price }) => {
          return (
            <div>
              <h4 className={styles.name}>{name}</h4>
              <p className={styles.description}>{description}</p>
              <p className={styles.price}>R$ {price}</p>
              <div className={styles.image_container}>
                <img src={img} alt="Foto do prato" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomendations;
