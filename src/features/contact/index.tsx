import React from "react";
import styles from "../contact/styles.module.scss";

export default function ContactUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.form_wrapper}>
          <form action="">
            <div className={styles.text}>
              <h2>How Can we help you?</h2>
              <p>Reach out and we will get back to you within 24 hours!</p>
            </div>
            <div className={styles.name_box}>
              <div className={styles.label_box}>
                <label htmlFor="">First name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={styles.label_box}>
                <label htmlFor="">Last name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
            </div>
            <div className={styles.email_box}>
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className={styles.message_box}>
              <label htmlFor="">Message</label>
              <textarea name="" id="" placeholder="Message"></textarea>
            </div>
            <div className={styles.btn}>
              <button>Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
