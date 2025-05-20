"use client";
import React from "react";
import styles from "../hero/styles.module.scss";
import FlightSearchForm, { FlightSearchData } from "@/components/hero-form";

export default function HomepageHero() {
  const handleSearch = (formData: FlightSearchData) => {
    console.log("Search submitted:", formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.conatiner}>
        <div className={styles.conatiner_box}>
          <div className={styles.conatiner_text}>
            <h2>Fly Smarter, Travel Further!</h2>
            <p>
              We&apos;ve got you covered! Book your flights, apply for visas, and get
              expert travel advice all in one place. Let us help you plan your
              dream trip
            </p>
          </div>
          <div className={styles.conatiner_flight}>
            <FlightSearchForm onSubmit={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}
