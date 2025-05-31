"use client";
import React from "react";
import styles from "../payment-component/styles.module.scss";
import { ArrowbackIcon } from "@/components/icons";
import { useRouter } from "next/navigation";
import FlightSummary from "@/features/travelers-details/flight-summary";
import PaymentMethod from "../payment-method";

export default function PaymentComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/traveler-details");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_width}>
          <div onClick={handleClick} className={styles.back}>
            <ArrowbackIcon />
            <p>Make payment</p>
          </div>
          <div className={styles.pageLayout}>
            <aside className={styles.filtersSidebar}>
              <FlightSummary />
            </aside>
            <main className={styles.flightsList}>
              <PaymentMethod />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
