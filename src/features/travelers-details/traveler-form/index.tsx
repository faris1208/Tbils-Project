import { ProtectedIcon } from "@/components/icons";
import styles from "../traveler-form/styles.module.scss";
// import { FaCheckCircle } from 'react-icons/fa';

export default function TravelerForm() {
  return (
    <div className={styles.formContainer}>
        <h3>Traveler detail</h3>
      <div className={styles.first}>
        <div className={styles.sectionHeader}>
          <h3>
            1. Personal data{" "}
            <span className={styles.badge}>Non Refundable</span>
          </h3>
          <div className={styles.protected}>
            <p>Your personal data is protected.</p>
            <ProtectedIcon />
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>Title</label>
            <select>
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Ms.</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>First Name</label>
            <input type="text" placeholder="Enter name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Surname</label>
            <input type="text" placeholder="Enter name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Middle Name (option)</label>
            <input type="text" placeholder="Enter name" />
          </div>

          <div className={styles.inputGroup}>
            <label>Nationality</label>
            <select>
              <option>Select</option>
              <option>Nigerian</option>
              <option>Canadian</option>
              <option>Other</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Gender</label>
            <select>
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Date of birth</label>
            <input type="date" />
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className={styles.second}>
        <div className={styles.sectionHeader}>
          <h3>Where to get a feedback</h3>
          <div className={styles.protected}>
            <p>Your personal data is protected.</p>
            <ProtectedIcon />
          </div>
        </div>
        <div className={`${styles.grid} ${styles.feedbackSection}`}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Phone number</label>
            <input type="tel" placeholder="Enter number" />
          </div>
        </div>
      </div>
    </div>
  );
}
