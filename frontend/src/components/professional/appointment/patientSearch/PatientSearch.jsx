import styles from './PatientSearch.module.css'

const PatientSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={`${styles.body}`}>
      <form
        className={`${styles.form}`}
        onSubmit="event.preventDefault()"
        role="search"
      >
        <label
          className={`${styles.html} ${styles.label}`}
          htmlFor="search"
        >
          Procure por algo
        </label>
        <input
          value={searchQuery}
          onInput={event => setSearchQuery(event.target.value)}
          className={`${styles.input}`}
          id="search"
          type="search"
          name="s"
          placeholder="Procure paciente..."
          required
        />
      </form>
    </div>
  );
};

export default PatientSearch;
