"use client";
import React from "react";
import styles from "../modal/styles.module.scss"; 
import { AirplaneIcon } from "@/components/icons";

interface Props {
  data: import("../../../../../components/hero-form").FlightSearchData;
  onClose: () => void;
}

const FlightDataModal: React.FC<Props> = ({ data, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose} >
      <div className={styles.modal}>
        <h2>Searching for available planes</h2>
        <div className={styles.from}>
            <p>{data.from}</p>
            <AirplaneIcon />
            <p>{data.to}</p>
        </div>
        <div className={styles.departure}>
            <p><span>{data.departure?.toDateString()}</span> - <span> {data.travelType === "Return" ? data.returnDate?.toDateString() : "N/A"}</span></p>
            <p><span> {data.travelers} passenger</span>, <span> {data.flightType}</span></p>
        </div>
      </div>
    </div>
  );
};

export default FlightDataModal;
