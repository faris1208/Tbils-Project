"use client";
import React from "react";
import styles from "../flight-booked/styles.module.scss";
import { useRouter } from "next/navigation";

interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departureTime: string;
  departureLocation: string;
  arrivalTime: string;
  arrivalLocation: string;
  price: string;
  duration: string;
}

export default function FlightBooking() {
    const router = useRouter();
  const flights: Flight[] = [
    {
      id: "1",
      airline: "Arik Air",
      flightNumber: "No. Retrocess",
      departureTime: "08:50 AM",
      departureLocation: "Lagos",
      arrivalTime: "10:00 AM",
      arrivalLocation: "Canada",
      price: "$45.00",
      duration: "1h 10m",
    },
    {
      id: "2",
      airline: "Delta Airlines",
      flightNumber: "DL 1234",
      departureTime: "10:15 AM",
      departureLocation: "Lagos",
      arrivalTime: "12:30 PM",
      arrivalLocation: "New York",
      price: "$320.00",
      duration: "2h 15m",
    },
    {
      id: "3",
      airline: "British Airways",
      flightNumber: "BA 987",
      departureTime: "02:20 PM",
      departureLocation: "Lagos",
      arrivalTime: "07:45 PM",
      arrivalLocation: "London",
      price: "$550.00",
      duration: "5h 25m",
    },
    {
      id: "4",
      airline: "Emirates",
      flightNumber: "EK 786",
      departureTime: "11:30 PM",
      departureLocation: "Lagos",
      arrivalTime: "06:15 AM (+1)",
      arrivalLocation: "Dubai",
      price: "$680.00",
      duration: "6h 45m",
    },
    {
      id: "5",
      airline: "Qatar Airways",
      flightNumber: "QR 456",
      departureTime: "09:45 AM",
      departureLocation: "Lagos",
      arrivalTime: "03:30 PM",
      arrivalLocation: "Doha",
      price: "$590.00",
      duration: "5h 45m",
    },
    {
      id: "6",
      airline: "Ethiopian Airlines",
      flightNumber: "ET 890",
      departureTime: "07:30 AM",
      departureLocation: "Lagos",
      arrivalTime: "12:45 PM",
      arrivalLocation: "Addis Ababa",
      price: "$420.00",
      duration: "5h 15m",
    },
  ];

  const handleClick = () => {
    router.push("/traveler-details")
  }

  return (
    <div className={styles.flightListings}>
      <h1 className={styles.pageTitle}>Flights</h1>

      <div className={styles.flightsContainer}>
        {flights.map((flight) => (
          <div key={flight.id} className={styles.flightCard}>
            <div className={styles.flightHeader}>
              <div className={styles.flight_refund}>
                <h2 className={styles.airline}>{flight.airline}</h2>
                <p>Non Refundable</p>
              </div>
              <div className={styles.flightFooter}>
                <div className={styles.price}>
                  <span>Pay full</span>
                  <p className={styles.priceAmount}>{flight.price}</p>
                </div>

                <button onClick={handleClick} className={styles.bookButton}>Book now</button>
              </div>
              {/* <span className={styles.flightNumber}>{flight.flightNumber}</span> */}
            </div>

            <div className={styles.divider}></div>

            <div className={styles.flight_flex}>
              <div className={styles.flight_depart}>
              <h2>Departure</h2>
                <div className={styles.flightDetails}>
                  <div className={styles.departure}>
                    <p className={styles.time}>{flight.departureTime}</p>
                    <p className={styles.location}>
                      {flight.departureLocation}
                    </p>
                  </div>
                  <div className={styles.duration}>
                    <p>{flight.duration}</p>
                    <div className={styles.durationLine}></div>
                    <p>Non-stop</p>
                    {/* <div className={styles.durationLine}></div> */}
                  </div>
                  <div className={styles.arrival}>
                    <p className={styles.time}>{flight.arrivalTime}</p>
                    <p className={styles.location}>{flight.arrivalLocation}</p>
                  </div>
                </div>
              </div>
              <div className={styles.flight_depart}>
                <h2>Arrival</h2>
                <div className={styles.flightDetails}>
                  <div className={styles.departure}>
                    <p className={styles.time}>{flight.departureTime}</p>
                    <p className={styles.location}>
                      {flight.departureLocation}
                    </p>
                  </div>
                  <div className={styles.duration}>
                    <p>{flight.duration}</p>
                    <div className={styles.durationLine}></div>
                    <p>Non-stop</p>
                    {/* <div className={styles.durationLine}></div> */}
                  </div>
                  <div className={styles.arrival}>
                    <p className={styles.time}>{flight.arrivalTime}</p>
                    <p className={styles.location}>{flight.arrivalLocation}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
