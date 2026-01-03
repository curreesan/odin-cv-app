import styles from "../styles/Education.module.css";

export default function Education({ data, onChange, isEditMode }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  if (isEditMode) {
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Educational Experience</h2>
        <form>
          <label className={styles.label}>
            School Name
            <input
              type="text"
              name="school"
              value={data.school || ""}
              onChange={handleChange}
              placeholder="Harvard University"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Title of Study
            <input
              type="text"
              name="title"
              value={data.title || ""}
              onChange={handleChange}
              placeholder="Computer Science"
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Date of Study
            <input
              type="text"
              name="date"
              value={data.date || ""}
              onChange={handleChange}
              placeholder="2018 - 2022"
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
      <h2 className={styles.sectionTitle}>Educational Experience</h2>
      {data.school ? (
        <div className={styles.preview}>
          <p>
            <strong>{data.school}</strong>
          </p>
          <p>{data.title}</p>
          <p>
            <em>{data.date}</em>
          </p>
        </div>
      ) : (
        <p className={styles.placeholder}>
          No education information added yet.
        </p>
      )}
    </div>
  );
}
