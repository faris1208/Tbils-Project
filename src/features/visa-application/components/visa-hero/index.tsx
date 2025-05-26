"use client"
import React from "react";
import styles from "../visa-hero/styles.module.scss";
import { useRouter } from "next/navigation";

export default function VisaHero() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/apply")
    }
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h2>Apply For Your Visa With Ease</h2>
            <p>
              Fast, secure and hassle-free visa application services designed to
              get you where you need to go. We streamline the entire process.
            </p>
            <div onClick={handleClick} className={styles.btn}>
              <button>Start Your Application</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
