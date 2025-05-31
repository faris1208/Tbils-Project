import React from "react";
import styles from "../assistance/styles.module.scss";
import approved from "../../../../../public/assets/images/approved_image.svg";
import Image from "next/image";
import { assistance } from "@/components/data";

export default function Assistance() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_width}>
          <div className={styles.need_help}>
            <p>Need Help?</p>
            <h3>Our Visa Assistance</h3>
            <p className={styles.need}>
              We guide you through every step of your visa application, from
              document preparation to submission and approval. Whether you are
              travelling for work, study or leisure, our dedicated team is
              committed to helping you secure your visa with ease.
            </p>
            <div className={styles.approved_box}>
              <Image
                src={approved}
                alt="approved"
                width={100}
                height={100}
                className={styles.approved_image}
              />
            </div>
          </div>
          <div className={styles.assistanceWrapper}>
            {assistance.map((item) => (
              <div key={item.id} className={styles.assistanceItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={120}
                    className={styles.image_wrapper}
                  />
                </div>
                <div className={styles.content}>
                  <h3>{item.name}</h3>
                  <ul>
                    {item.descriptionOne && <li>{item.descriptionOne}</li>}
                    {item.descriptionTwo && <li>{item.descriptionTwo}</li>}
                    {item.descriptionThree && <li>{item.descriptionThree}</li>}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
