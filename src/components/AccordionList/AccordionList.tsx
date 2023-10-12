import React, { PropsWithChildren } from "react";
import styles from "./AccordionList.module.sass";
import down from "/src/assets/icons/Down.svg";

interface IAccordion extends PropsWithChildren {
  title: string;
}

const AccordionList = ({ title, children }: IAccordion) => {
  const [closed, setClosed] = React.useState<boolean>(false);
  console.log(closed);
  return (
    <div className={styles.accordion}>
      <div
        className={styles.title}
        onClick={({ target }) => {
          setClosed(!closed);
        }}
      >
        <h2 className={styles.group_name}>{title}</h2>
        <div className={styles.down_icon}>
          <img src={down} />
        </div>
      </div>
      <div
        className={`${styles.content} ${
          closed ? styles.inactive : styles.active
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionList;
