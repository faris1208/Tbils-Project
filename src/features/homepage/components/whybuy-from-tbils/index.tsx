import React from "react";
import styles from "../whybuy-from-tbils/styles.module.scss";
import { buyTbils } from "@/components/data";

export default function WhyBuyFromTbils() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_width}>
          <div className={styles.container_text}>
            <h2>Why buy tickets from Tbils?</h2>
            <p>
              Enjoy a seamless travel experience with these amazing benefits!
            </p>
          </div>
          <div className={styles.gridWrapper}>
            <div className={styles.row}>
              <div className={`${styles.card} ${styles.large}`}>
                {renderCard(buyTbils[0])}
              </div>
              <div className={`${styles.card} ${styles.small}`}>
                {renderCard(buyTbils[1])}
              </div>
              <div className={`${styles.card} ${styles.small}`}>
                {renderCard(buyTbils[2])}
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.card} ${styles.small}`}>
                {renderCard(buyTbils[3])}
              </div>
              <div className={`${styles.card} ${styles.small}`}>
                {renderCard(buyTbils[4])}
              </div>
              <div className={`${styles.card} ${styles.large}`}>
                {renderCard(buyTbils[5])}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCard = (item: {
  id: string;
  name: string;
  text: string;
  backgroundImage: string;
  overlayColor?: string;
  textColor?: string;
}) => (
  <div
    className={styles.cardInner}
    style={{ backgroundImage: `url(${item.backgroundImage})` }}
  >
    <div
      className={styles.overlay}
      style={{
        backgroundColor: (item.overlayColor || "rgba(0,0,0,0.4)").replace(
          /;/g,
          ""
        ),
        color: (item.textColor || "#fff").replace(/;/g, ""),
      }}
    >
      <p className={styles.item_name}>{item.name}</p>
      <p>{item.text}</p>
    </div>
  </div>
);
