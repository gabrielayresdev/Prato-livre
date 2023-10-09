import React, { PropsWithChildren } from "react";
import styles from "./AccordionList.module.sass";
import down from "/src/assets/icons/Down.svg";

interface IAccordion extends PropsWithChildren {
  title: string;
}

const AccordionList = ({ title, children }: IAccordion) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.title}>
        <h2 className={styles.group_name}>{title}</h2>
        <div>
          <img src={down} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default AccordionList;
