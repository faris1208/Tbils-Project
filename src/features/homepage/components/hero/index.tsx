"use client";
import React, { useEffect, useState } from "react";
import styles from "../hero/styles.module.scss";
import FlightSearchForm, { FlightSearchData } from "@/components/hero-form";
import FlightDataModal from "./modal";
import { useRouter } from "next/navigation";

export default function HomepageHero() {
  const [modalData, setModalData] = useState<FlightSearchData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();


  const handleSearch = async (formData: FlightSearchData) => {
    setModalData(formData);
    setIsLoading(true);

    // Simulate delay with async
    // await new Promise((resolve) => setTimeout(resolve, 9000));

    router.push("/flight-listing");
  };

  const closeModal = () => {
    setModalData(null);
    setIsLoading(false);
  };

  useEffect(() => {
    if (modalData) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalData]);
  

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
      {modalData && (
        <FlightDataModal 
          data={modalData} 
          onClose={closeModal} 
          isLoading={isLoading} 
        />
      )}
    </div>
  );
}