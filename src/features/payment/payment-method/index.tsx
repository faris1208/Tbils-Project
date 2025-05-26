import React from 'react'
import styles from "../payment-method/styles.module.scss"
import mastercard from "../../../../public/assets/images/mastercard.svg"
import paystack from "../../../../public/assets/images/paystack.svg"
import visa from "../../../../public/assets/images/visa.svg"
import verve from "../../../../public/assets/images/verve.svg"
import Image from 'next/image'

export default function PaymentMethod() {
  return (
    <div className={styles.wrapper}>
      <h3>Payment methods</h3>
      <div className={styles.payment_icon}>
        <div className={styles.images}>
            <Image 
            src={mastercard}
            alt='master'
            width={100}
            height={50}
            className={styles.mastercard_images}
            />
        </div>
        <div className={styles.images}>
            <Image 
            src={paystack}
            alt='master'
            width={100}
            height={50}
            className={styles.mastercard_images}
            />
        </div>
        <div className={styles.images}>
            <Image 
            src={visa}
            alt='master'
            width={100}
            height={50}
            className={styles.mastercard_images}
            />
        </div>
        <div className={styles.images}>
            <Image 
            src={verve}
            alt='master'
            width={100}
            height={50}
            className={styles.mastercard_images}
            />
        </div>
      </div>
      <div className={styles.form_wrapper}>
        <form action="" className={styles.form_box}>
          <div className={styles.form_label}>
            <label htmlFor="">Card number</label>
            <input type="number" />
          </div>
          <div className={styles.form_label}>
            <label htmlFor="">Name on card</label>
            <input type="text" />
          </div>
          <div className={styles.form_label}>
            <label htmlFor="">Amount to withdraw</label>
            <input type="number" />
          </div>
          <div className={styles.form_label}>
            <label htmlFor="">Expiry date</label>
            <input type="number" />
          </div>
          <div className={styles.form_label}>
            <label htmlFor="">CVV</label>
            <input type="number" />
          </div>
        </form>
        <div className={styles.btn}>
          <button>Make payment</button>
        </div>
      </div>
    </div>
  )
}
