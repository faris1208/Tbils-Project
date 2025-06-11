"use client";
import React, { useEffect, useRef, useState } from "react";
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

interface LocationSuggestion {
  id: number;
  iata: string;
  city: string;
  country: string;
  text: string;
}

const fetchSuggestions = async (query: string): Promise<LocationSuggestion[]> => {
  try {
    const response = await fetch(
      `https://travelbox-api.tbils.com/v1/locations?query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.locations || [];
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

const FlightSearchForm: React.FC<FlightSearchFormProps> = ({ onSubmit }) => {
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FlightSearchData>({
    from: "",
    to: "",
    departure: null,
    returnDate: null,
    flightType: "Economy",
    travelType: "Return",
    travelers: 1,
  });

  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [focusedField, setFocusedField] = useState<"from" | "to" | null>(null);

  const handleInputChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "from" || name === "to") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      setFocusedField(name);
      if (value.length >= 2) {
        const fetchedSuggestions = await fetchSuggestions(value);
        setSuggestions(fetchedSuggestions);
      } else {
        setSuggestions([]);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          name === "travelers" ? (value === "" ? "" : parseInt(value)) : value,
      }));
    }
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

  const handleSuggestionClick = (text: string) => {
    if (focusedField) {
      setFormData((prev) => ({
        ...prev,
        [focusedField]: text,
      }));
      setSuggestions([]);
      setFocusedField(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fromRef.current &&
        !fromRef.current.contains(event.target as Node) &&
        toRef.current &&
        !toRef.current.contains(event.target as Node)
      ) {
        setFocusedField(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <form className={styles.flightSearchForm} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          {/* From */}
          <div ref={fromRef} className={styles.formGroup}>
            <label htmlFor="from">From</label>
            <div className={styles.autocompleteWrapper}>
              <input
                type="text"
                id="from"
                name="from"
                placeholder="City or location"
                value={formData.from}
                onChange={handleInputChange}
                required
                autoComplete="off"
              />
              {focusedField === "from" && suggestions.length > 0 && (
                <ul className={styles.suggestions}>
                  {suggestions.map((sug) => (
                    <li key={sug.id} onClick={() => handleSuggestionClick(sug.text)}>
                      {sug.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* To */}
          <div ref={toRef} className={styles.formGroup}>
            <label htmlFor="to">To</label>
            <div className={styles.autocompleteWrapper}>
              <input
                type="text"
                id="to"
                name="to"
                placeholder="Destination"
                value={formData.to}
                onChange={handleInputChange}
                required
                autoComplete="off"
              />
              {focusedField === "to" && suggestions.length > 0 && (
                <ul className={styles.suggestions}>
                  {suggestions.map((sug) => (
                    <li key={sug.id} onClick={() => handleSuggestionClick(sug.text)}>
                      {sug.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Travel Type */}
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

          {/* Departure */}
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

          {/* Return Date */}
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

          {/* Flight Type */}
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

          {/* Travelers */}
          <div className={styles.formGroup}>
            <label htmlFor="travelers">No. of travelers</label>
            <input
              type="number"
              id="travelers"
              name="travelers"
              min="1"
              max="10"
              value={formData.travelers === "" ? "" : formData.travelers}
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
  );
};

export default FlightSearchForm;
