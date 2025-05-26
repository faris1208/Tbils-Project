"use client";
import React from "react";
import styles from "../modal/styles.module.scss"; 
import { AirplaneIcon } from "@/components/icons";

interface Props {
  data: import("../../../../../components/hero-form").FlightSearchData;
  onClose: () => void;
  isLoading?: boolean;
}

const FlightDataModal: React.FC<Props> = ({ data, onClose, isLoading }) => {
  // const router = useRouter();

  // useEffect(() => {
  //   if (isLoading) {
  //     const timer = setTimeout(() => {
  //       router.push("/flights-listing");
  //     }, 9000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [isLoading, router]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <div className={styles.loading_state}>
            <h2>Searching for available flights...</h2>
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
            </div>
            <div className={styles.flight_info}>
              <div className={styles.from}>
                <p>{data.from}</p>
                <AirplaneIcon className={styles.airplane_icon} />
                <p>{data.to}</p>
              </div>
              <div className={styles.departure}>
                <p>
                  <span>{data.departure?.toDateString()}</span>
                  {data.travelType === "Return" && (
                    <> - <span>{data.returnDate?.toDateString()}</span></>
                  )}
                </p>
                <p>
                  <span>{data.travelers} passenger(s)</span>, <span>{data.flightType}</span>
                </p>
              </div>
            </div>
            <p className={styles.loading_text}>Please wait while we find the best options...</p>
          </div>
        ) : (
          <>
            <h2>Searching for available planes</h2>
            <div className={styles.from}>
              <p>{data.from}</p>
              <AirplaneIcon className={styles.airplane_icon} />
              <p>{data.to}</p>
            </div>
            <div className={styles.departure}>
              <p>
                <span>{data.departure?.toDateString()}</span>
                {data.travelType === "Return" && (
                  <> - <span>{data.returnDate?.toDateString()}</span></>
                )}
              </p>
              <p>
                <span>{data.travelers} passenger(s)</span>, <span>{data.flightType}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlightDataModal;