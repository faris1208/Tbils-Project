"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../footer/styles.module.scss";
import { DownIcon, FaceBookIcon, GlobalIcon, InstaIcon, LinkIcon, TwitterIcon } from "../icons";
import logo from "../../../public/assets/images/tbils_logo.svg";
import Image from "next/image";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Other",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const handleApplyClick = () => {
    if (selectedCountry) {
      alert(`Applying for visa to ${selectedCountry}`);
      // Here you would typically navigate to an application page
      // router.push('/apply-visa');
    } else {
      alert("Please select a country first");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div  className={styles.overlay}>
          <div className={styles.footer_first}>
            <div className={styles.container_width}>
            <div className={styles.footer_first_text}>
              <h2>Travel without limits</h2>
              <p>Apply and get your visa with simple steps in Tbils</p>
            </div>
            <div className={styles.footer_first_passport}>
              <div className={styles.footer_first_passport_container}>
                <div className={styles.passport_flex}>
                  <div className={styles.dropdownContainer} ref={dropdownRef}>
                    <div className={styles.global}>
                      <GlobalIcon className={styles.global_icon} />
                      <h2 className={styles.title}>Your passport</h2>
                    </div>
                    <div
                      className={styles.dropdownHeader}
                      onClick={toggleDropdown}
                    >
                      <span>{selectedCountry || "Select your country"}</span>
                      <span
                        className={`${styles.arrow} ${
                          isOpen ? styles.open : ""
                        }`}
                      >
                        <DownIcon className={styles.icon_down} />
                      </span>
                    </div>
                    {isOpen && (
                      <ul className={styles.dropdownList}>
                        {countries.map((country) => (
                          <li
                            key={country}
                            className={styles.dropdownItem}
                            onClick={() => handleCountrySelect(country)}
                          >
                            {country}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <button
                    className={styles.applyButton}
                    onClick={handleApplyClick}
                    disabled={!selectedCountry}
                  >
                    Apply for visa
                  </button>
                </div>
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className={styles.footer_last}>
        <div className={styles.footer_last_box}>
          <div className={styles.footer_last_image}>
            <Image
              src={logo}
              alt="logo"
              width={60}
              height={50}
              className={styles.footer_logo}
            />
          </div>
          <div className={styles.social_logo}>
            <TwitterIcon />
            <InstaIcon />
            <FaceBookIcon />
            <LinkIcon />
          </div>
          <div className={styles.terms}>
            <p>
              © 2025 [Platform Name]. All Rights Reserved. | Terms & Privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
