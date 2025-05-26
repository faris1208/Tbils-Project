import styles from "../flight-summary/styles.module.scss";

export default function FlightSummary() {
  return (
    <div className={styles.container}>
        <h3>Filter</h3>
      <div className={styles.section}>
        <div className={styles.flightHeader}>
          <h3>Depart · Apr 03, 2025 · 0 stop</h3>
        </div>
        <div className={styles.details_box}>
          <div className={styles.airportDetails}>
            <p>06:30AM (LOS)</p>
            <p>Murtala Muhammed Arpt</p>
            <p>Lagos</p>
          </div>
          <div className={styles.airportDetails}>
            <p>06:30AM (LOS)</p>
            <p>Canada int&apos;l Arpt</p>
            <p>Lagos</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.checkboxWrapper}>
          <div className={styles.reminder}>
            <input type="checkbox" /> <p>Flight Reminder as SmS</p>
          </div>
          <span>$89.00</span>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.base}>
            <p>Flight Base Fare</p>
            <p>Adults x 1</p>
        </div>
        <div className={styles.fare} >
            <p>Base fare</p>
            <p className={styles.amount}>$89.00</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.base}>
            <p>Baggage Information</p>
        </div>
        <div className={styles.fare} >
            <p>Baggage Allowance <br /><span>(Per Passenger)</span></p>
            <p className={styles.amount}>15 KG</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.total}>
          <p>Total</p>
          <p className={styles.amount}>$100.00</p>
        </div>
      </div>
    </div>
  );
}
