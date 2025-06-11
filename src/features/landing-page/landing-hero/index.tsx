"use client";
import React from "react";
import styles from "../landing-hero/styles.module.scss";
import { useRouter } from "next/navigation";


export default function LandingPageHero() {
    const router = useRouter();

    const handleFlight = () => {
        router.push("/flight")
    }


    const handleVisa = () => {
        router.push("/visa-application")
    }

  return (
    <div className={styles.wrapper}>
      <div className={styles.conatiner}>
        <div className={styles.conatiner_box}>
          <div className={styles.conatiner_text}>
            <h2>Fly Smarter, Travel Further!</h2>
            <p>
            We&apos;ve got you covered! Book your flights, apply for visas, and get 
            </p>
            <div className={styles.btn}>
                <button onClick={handleFlight} className={styles.btn_one}>Book Cheap Flight</button>
                <button onClick={handleVisa} className={styles.btn_two}>Request Visa</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}