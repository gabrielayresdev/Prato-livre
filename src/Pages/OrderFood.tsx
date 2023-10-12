import React from "react";
import Recomendations from "../components/Recomendations/Recomendations";
import Portion from "../components/PortionsSelection/Portion";
import styles from "./OrderFood.module.sass";
import AccordionList from "../components/AccordionList/AccordionList";
import useFetch from "../hooks/useFetch";

interface ingredient {
  name: string;
  weight: number;
}
interface drink {
  name: string;
  volume: number;
}

interface ingredients {
  principais: ingredient[];
  acompanhamentos: ingredient[];
  massas: ingredient[];
  "saladas e legumes": ingredient[];
  bebidas: drink[];
}

const OrderFood = () => {
  const {
    data: portions,
    loading,
    error,
  } = useFetch<ingredients>("Ingredients.json");

  async function teste() {
    const response = await fetch("Ingredients.json");
    const json = await response.json();
    console.log(json);
  }
  teste();

  if (portions)
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
        <div className={styles.portions_selection}>
          <h3 className={styles.title}>Escolha suas porções</h3>
          {Object.entries(portions).map(([key, value]) => {
            if (key !== "drink") {
              return (
                <AccordionList title={key}>
                  {(value as drink[]).map((portion) => {
                    return (
                      <Portion
                        name={portion.name}
                        weight={`${portion.volume}ml`}
                      />
                    );
                  })}
                </AccordionList>
              );
            }
            // If it's a drink, returns:
            else {
              return (
                <AccordionList title={key}>
                  {(value as ingredient[]).map((portion) => {
                    return (
                      <Portion
                        name={portion.name}
                        weight={`${portion.weight}g`}
                      />
                    );
                  })}
                </AccordionList>
              );
            }
          })}
        </div>
      </div>
    );
  else return null;
};

export default OrderFood;
