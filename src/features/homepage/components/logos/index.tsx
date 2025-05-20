import React from "react";
import styles from "../logos/styles.module.scss";
// import { AmadeusIcon } from '@/components/icons'
import Image from "next/image";
import amad from "../../../../../public/assets/images/image 19.svg";
import nanta from "../../../../../public/assets/images/0ffe1d183bc48626fdc8d8f1442dbddea5ca15f8.png";
import asus from "../../../../../public/assets/images/image 21.svg";
import iata from "../../../../../public/assets/images/image 22.svg";

export default function Logo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo_image}>
          <Image src={amad} alt="logo" width={100} height={50} className={styles.amad_image} />
        </div>
        <div className={styles.logo_image}>
          <Image src={nanta} alt="logo" width={100} height={50} className={styles.amad_image} />
        </div>
        <div className={styles.logo_image}>
          <Image src={asus} alt="logo" width={100} height={50} className={styles.amad_image} />
        </div>
        <div className={styles.logo_image}>
          <Image src={iata} alt="logo" width={100} height={50} className={styles.amad_image} />
        </div>
        <div className={styles.logo_image}>
          <Image src={amad} alt="logo" width={100} height={50} className={styles.amad_image} />
        </div>
      </div>
    </div>
  );
}
