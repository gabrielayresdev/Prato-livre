import React from "react";
import Recomendations from "../components/Recomendations/Recomendations";
import Portion from "../components/PortionsSelection/Portion";
import styles from "./OrderFood.module.sass";
import AccordionList from "../components/AccordionList/AccordionList";

const OrderFood = () => {
  return (
    <div className={styles.order}>
      <h2 className={styles.title}>Monte sua marmita</h2>
      <Recomendations
        plates={[
          {
            name: "Frango e legumes grelhados",
            description:
              "Duas fatias de peito de frango temperado e grelhado acompanhados por  legumes",
            price: 17.6,
            img: "/src/assets/plates/plate1.png",
          },
          {
            name: "Strogonoff de frango",
            description:
              "Strogonoff de Frango acompanhado de arroz e batata palha",
            price: 22.9,
            img: "/src/assets/plates/plate1.png",
          },
        ]}
      />

      <AccordionList title="Acompanhamento">
        <Portion name={"Arroz branco"} weight={324} />
      </AccordionList>
    </div>
  );
};

export default OrderFood;
