import styles from "../styles/Experience.module.css";

export default function Experience({ data, onChange, isEditMode }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  if (isEditMode) {
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Practical Experience</h2>
        <form>
          <label className={styles.label}>
            Company Name
            <input
              type="text"
              name="company"
              value={data.company || ""}
              onChange={handleChange}
              placeholder="Google Inc."
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Position Title
            <input
              type="text"
              name="position"
              value={data.position || ""}
              onChange={handleChange}
              placeholder="Frontend Developer"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Main Responsibilities
            <textarea
              name="responsibilities"
              value={data.responsibilities || ""}
              onChange={handleChange}
              rows="4"
              placeholder="Built responsive UIs with React..."
              className={styles.textarea}
            />
          </label>

          <label className={styles.label}>
            Duration of Work
            <input
              type="text"
              name="duration"
              value={data.duration || ""}
              onChange={handleChange}
              placeholder="2022 - Present"
              className={styles.input}
            />
          </label>
        </form>
      </div>
    );
  }

  // Preview mode
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Practical Experience</h2>
      {data.company ? (
        <div className={styles.preview}>
          <p>
            <strong>{data.company}</strong> — {data.position}
          </p>
          <p>{data.responsibilities}</p>
          <p>
            <em>{data.duration}</em>
          </p>
        </div>
      ) : (
        <p className={styles.placeholder}>
          No experience information added yet.
        </p>
      )}
    </div>
  );
}
