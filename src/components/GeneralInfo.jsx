import styles from "./GeneralInfo.module.css";

export default function GeneralInfo() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>General Information</h2>

      <form>
        <label htmlFor="name" className={styles.label}>
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className={styles.input}
          />
        </label>

        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            className={styles.input}
          />
        </label>

        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(123) 456-7890"
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          Save
        </button>
      </form>
    </div>
  );
}
