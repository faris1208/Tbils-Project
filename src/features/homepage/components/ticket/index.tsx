"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../ticket/styles.module.scss";
import sky from "../../../../../public/assets/images/Frame 61.svg";
import Image from "next/image";
import { ticket } from "@/components/data";

// interface Ticket {
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//   }

//   interface TicketCarouselProps {
//     tickets: Ticket[];
//   }

export default function TicketHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const cardHeight = 300; // approx. full height of active card
    const centerIndex = Math.round(container.scrollTop / cardHeight);
    setActiveIndex(centerIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.container_width}>
          <div className={styles.ticket_box_one}>
            <p className={styles.cheaper}>Get cheaper tickets</p>
            <p>Lagos to London available</p>
            <div className={styles.ticket_box_one_image}>
              <Image
                src={sky}
                alt="sky"
                width={200}
                height={200}
                className={styles.sky}
              />
            </div>
            <div className={styles.ticket_text}>
              <p>Ticket cost $90.00 - $94.00</p>
              <button>Get ticket</button>
            </div>
          </div>
          <div className={styles.canada}>
            <div className={styles.sliderContainer} ref={containerRef}>
            {ticket.map((item, index) => (
  <div
    key={item.id}
    className={`${styles.ticketCard} ${
      index === activeIndex ? styles.active : ""
    }`}
    style={{ backgroundImage: `url(${item.backgroundImage})` }}
  >
    <Image src={item.image} alt={item.name} width={80} height={80} />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
