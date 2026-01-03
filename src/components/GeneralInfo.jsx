import styles from "../styles/GeneralInfo.module.css";

export default function GeneralInfo({ data, onChange, isEditMode }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  if (isEditMode) {
    return (
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>General Information</h2>
        <form>
          <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
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
      <div className={styles.preview}>
        <h1 className={styles.name}>{data.name || "Your Name"}</h1>
        <p className={styles.contact}>{data.email || "email@example.com"}</p>
        <p className={styles.contact}>{data.phone || "(123) 456-7890"}</p>
      </div>
    </div>
  );
}
