import React from "react";
import styles from "../services/styles.module.scss";
import { services } from "@/components/data";

// interface Service {
//   id: string;
//   name: string;
//   text: string;
//   backgroundImage: string;
// }

// interface ServicesGridProps {
//   services: Service[];
// }

export default function HeroServices() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_text}>
          <h2>Our Services</h2>
          <p>Enjoy a seamless travel experience with these amazing benefits!</p>
        </div>

        <div className={styles.gridWrapper}>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div
                key={service.id}
                className={styles.serviceCard}
                style={
                  {
                    "--bg-image": `url(${service.backgroundImage})`,
                  } as React.CSSProperties
                }
              >
                <div className={styles.content}>
                  <p className={styles.serviceName}>{service.name}</p>
                  <p className={styles.serviceText}>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
