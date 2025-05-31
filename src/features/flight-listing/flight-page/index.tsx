import React from "react";
import styles from "../flight-page/styles.module.scss";
import FlightFilters from "../flight-filter";
import FlightBooking from "../flight-booked";

export default function FlightsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageLayout}>
        <div className={styles.pageLayout_width}>
          <aside className={styles.filtersSidebar}>
            <FlightFilters />
          </aside>
          <main className={styles.flightsList}>
            <FlightBooking />
          </main>
        </div>
      </div>
    </div>
  );
}
