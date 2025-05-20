"use client"
import React, { useState } from "react";
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
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const container = e.currentTarget;
      const scrollPosition = container.scrollTop;
      const itemHeight = container.scrollHeight / ticket.length;
      const newIndex = Math.round(scrollPosition / itemHeight);
      setActiveIndex(Math.min(Math.max(newIndex, 0), ticket.length - 1));
    };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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
      <div 
        className={styles.categories} 
        onScroll={handleScroll}
      >
        {ticket.map((tick, index) => (
          <div 
            className={`${styles.box} ${index === activeIndex ? styles.active : ''}`} 
            key={tick.id}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.logo}>
              <Image
                src={tick.image}
                alt={tick.name}
                width={index === activeIndex ? 70 : 50}
                height={index === activeIndex ? 70 : 50}
                className={styles.canada_logo}
              />
            </div>
            <p className={styles.bold}>{tick.name}</p>
            <p>{tick.description}</p>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}
