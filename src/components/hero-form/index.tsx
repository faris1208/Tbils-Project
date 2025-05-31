"use client";
import React, { useState } from "react";
import styles from "../hero-form/styles.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FlightSearchFormProps {
  onSubmit: (formData: FlightSearchData) => void;
}

export interface FlightSearchData {
  from: string;
  to: string;
  departure: Date | null;
  returnDate: Date | null;
  flightType: string;
  travelType: string;
  travelers: number | "";
}


const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FlightSearchData>({
    from: "",
    to: "",
    departure: null,
    returnDate: null,
    flightType: "Economy",
    travelType: "Return",
    travelers: 1,
  });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: name === "travelers" ? parseInt(value) : value,
  //   }));
  // };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "travelers"
          ? value === "" ? "" : parseInt(value)
          : value,
    }));
  };
  

  const handleDateChange = (
    date: Date | null,
    field: "departure" | "returnDate"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.flightSearchForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="from">From</label>
              <input
                type="text"
                id="from"
                name="from"
                placeholder="City or location"
                value={formData.from}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="to">To</label>
              <input
                type="text"
                id="to"
                name="to"
                placeholder="Destination"
                value={formData.to}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="travelType">Travel type</label>
              <select
                id="travelType"
                name="travelType"
                value={formData.travelType}
                onChange={handleInputChange}
              >
                <option value="Return">Return</option>
                <option value="One-way">One-way</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="departure">Departure</label>
              <DatePicker
                id="departure"
                selected={formData.departure}
                onChange={(date) => handleDateChange(date, "departure")}
                placeholderText="Select date"
                className={styles.dateInput}
                minDate={new Date()}
                required
              />
            </div>

            {/* <div className={styles.formGroup}>
              <label htmlFor="returnDate">Return date</label>
              <DatePicker
                id="returnDate"
                selected={formData.returnDate}
                onChange={(date) => handleDateChange(date, "returnDate")}
                placeholderText="Select date"
                className={styles.dateInput}
                minDate={formData.departure || new Date()}
                disabled={formData.travelType === "One-way"}
              />
            </div> */}

            {formData.travelType === "Return" && (
  <div className={styles.formGroup}>
    <label htmlFor="returnDate">Return date</label>
    <DatePicker
      id="returnDate"
      selected={formData.returnDate}
      onChange={(date) => handleDateChange(date, "returnDate")}
      placeholderText="Select date"
      className={styles.dateInput}
      minDate={formData.departure || new Date()}
    />
  </div>
)}
            <div className={styles.formGroup}>
              <label htmlFor="flightType">Flight type</label>
              <select
                id="flightType"
                name="flightType"
                value={formData.flightType}
                onChange={handleInputChange}
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>

            

            <div className={styles.formGroup}>
              <label htmlFor="travelers">No. of travelers</label>
              <input
                type="number"
                id="travelers"
                name="travelers"
                min="1"
                max="10"
                value={formData.travelers === "" ? "" : formData.travelers}
                // value={formData.travelers}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.form_btn}>
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FlightSearchForm;
