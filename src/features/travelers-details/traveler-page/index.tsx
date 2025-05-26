"use client"
import React from "react";
import styles from "../traveler-page/styles.module.scss";
import FlightSummary from "../flight-summary";
import TravelerForm from "../traveler-form";
import { ArrowbackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";

export default function TravelerPage() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/flight-listing")
    }

    const handleProceed = () => {
        router.push("/payment"); 
      };

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
        <div onClick={handleClick} className={styles.back}>
            <ArrowbackIcon />
            <p>Traveler detail entry</p>
        </div>
      <div className={styles.pageLayout}>
        <aside className={styles.filtersSidebar}>
          <FlightSummary />
        </aside>
        <main className={styles.flightsList}>
          <TravelerForm />
        </main>
      </div>
      <div className={styles.accept_box}>
        <div className={styles.accept}>
          <input type="checkbox" /> <p>By proceeding, I acknowledge that i have read and agree to Tbil Travels Flight booking terms & conditions</p>
        </div>
        <div className={styles.btn}>
            <button onClick={handleProceed}>Proceed to pay</button>
        </div>
      </div>
      </div>
    </div>
  );
}
