"use client"
import React from 'react'
import styles from "../choose-country/styles.module.scss"
import { applyCountries } from '@/components/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ChooseCountry() {

    const router = useRouter();

    const handleClick = () => {
        router.push("/apply")
    }
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.one}>
                    <h3>Choose Country</h3>
                    <p>Our Visa Application</p>
                </div>
                <div className={styles.two}>
                    <p>At Tibil Travels, we specialize in providing expert visa assistance to ensure your application meets required standards. Our knowlegeable team is dedicated to helping you undertsand the requirements, gather necessary documents, and submit a successful visa application  </p>
                </div>
            </div>
            <div className={styles.application}>
                {applyCountries.map((apply) => (
                    <div key={apply.id} className={styles.apply_box}>
                        <div className={styles.image_box}>
                            <Image 
                            src={apply.image}
                            alt='image'
                            width={200}
                            height={300}
                            className={styles.image_space}
                            />
                        </div>
                        <div className={styles.space_text}>
                            <p  className={styles.apply_name}>{apply.name}</p>
                            <p>{apply.description}</p>
                            <div className={styles.btn}>
                                <button>Apply Now</button>
                            </div>
                            <div onClick={handleClick} className={styles.countries}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
