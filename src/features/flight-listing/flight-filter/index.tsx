"use client";
import React, { useState } from "react";
import styles from "../flight-filter/styles.module.scss";

interface FilterOption {
  id: string;
  label: string;
  price: string;
  checked: boolean;
}

interface FilterGroup {
  title: string;
  options: FilterOption[];
}

export default function FlightFilters() {
  const [filters, setFilters] = useState<FilterGroup[]>([
    {
      title: "Airlines",
      options: [
        { id: "airline-1", label: "Ark Air", price: "$99.00", checked: false },
        { id: "airline-2", label: "Blue Sky", price: "$120.00", checked: false },
        { id: "airline-3", label: "Oceanic", price: "$150.00", checked: false },
        { id: "airline-4", label: "Global Wings", price: "$200.00", checked: false },
      ],
    },
    {
      title: "Stops",
      options: [
        { id: "stops-0", label: "Non stop", price: "$99.00", checked: false },
        { id: "stops-1", label: "1 stop(1)", price: "$99.00", checked: false },
        { id: "stops-2", label: "1+ stop (0)", price: "$99.00", checked: false },
      ],
    },
    {
      title: "Departure",
      options: [
        { id: "dep-morning", label: "Morning", price: "$99.00", checked: false },
        { id: "dep-afternoon", label: "Afternoon", price: "$99.00", checked: false },
        { id: "dep-evening", label: "Evening", price: "$99.00", checked: false },
      ],
    },
    {
      title: "Arrival",
      options: [
        { id: "arr-morning", label: "Morning", price: "$99.00", checked: false },
        { id: "arr-afternoon", label: "Afternoon", price: "$99.00", checked: false },
        { id: "arr-evening", label: "Evening", price: "$99.00", checked: false },
      ],
    },
  ]);

  const handleCheckboxChange = (groupIndex: number, optionIndex: number) => {
    const updatedFilters = [...filters];
    updatedFilters[groupIndex].options[optionIndex].checked = 
      !updatedFilters[groupIndex].options[optionIndex].checked;
    setFilters(updatedFilters);
    
    // Here you would typically filter your flight results
    // For example: filterFlights(updatedFilters);
  };

  return (
    <div className={styles.filtersContainer}>
      <h3>Filter</h3>
      
      {filters.map((group, groupIndex) => (
        <div key={group.title} className={styles.filterGroup}>
          <h4 className={styles.filterTitle}>{group.title}</h4>
          <div className={styles.filterOptions}>
            {group.options.map((option, optionIndex) => (
              <div key={option.id} className={styles.filterOption}>
                <input
                  type="checkbox"
                  id={option.id}
                  checked={option.checked}
                  onChange={() => handleCheckboxChange(groupIndex, optionIndex)}
                  className={styles.filterCheckbox}
                />
                <label htmlFor={option.id} className={styles.filterLabel}>
                  <span>{option.label}</span>
                  <span className={styles.filterPrice}>{option.price}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}