import React from "react";
import Recomendations from "../components/Recomendations/Recomendations";

const OrderFood = () => {
  return (
    <div>
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
    </div>
  );
};

export default OrderFood;
