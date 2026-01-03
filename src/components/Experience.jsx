import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Practical Experience</h2>

      <form>
        <label htmlFor="company" className={styles.label}>
          Company Name
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Google Inc."
            className={styles.input}
          />
        </label>

        <label htmlFor="position" className={styles.label}>
          Position Title
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Frontend Developer"
            className={styles.input}
          />
        </label>

        <label htmlFor="responsibilities" className={styles.label}>
          Main Responsibilities
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows="4"
            placeholder="Built user interfaces with React, optimized performance..."
            className={styles.textarea}
          />
        </label>

        <label htmlFor="duration" className={styles.label}>
          Duration of Work
          <input
            type="text"
            id="duration"
            name="duration"
            placeholder="2022 - Present"
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          Add Experience
        </button>
      </form>
    </div>
  );
}
