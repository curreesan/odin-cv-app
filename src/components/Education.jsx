import styles from "./Education.module.css";

export default function Education() {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Educational Experience</h2>

      <form>
        <label htmlFor="school" className={styles.label}>
          School Name
          <input
            type="text"
            id="school"
            name="school"
            placeholder="Harvard University"
            className={styles.input}
          />
        </label>

        <label htmlFor="title" className={styles.label}>
          Title of Study
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Computer Science"
            className={styles.input}
          />
        </label>

        <label htmlFor="date" className={styles.label}>
          Date of Study
          <input
            type="text"
            id="date"
            name="date"
            placeholder="2018 - 2022"
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          Add Education
        </button>
      </form>
    </div>
  );
}
