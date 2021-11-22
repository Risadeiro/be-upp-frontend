import { useState, useEffect } from "react"
import axios from "axios";
import PatientSearch from "./patientSearch/PatientSearch";
import styles from "./Appointment.module.css";
import data from "./pacienteTest.json"
import { TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/lab"
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

const Appointment = ({ doctor }) => {
  const filterPosts = (posts, query) => {
    if (!query) {
      return posts;
    }

    return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query.toLowerCase());
    });
  };

  const [allPatients, setAllPatients] = useState()
  const [searchQuery, setSearchQuery] = useState()
  const [selectedPatient, setSelectedPatient] = useState()
  const [appointmentDate, setAppointmentDate] = useState(new Date())
  const filteredPatients = filterPosts(data, searchQuery)

  useEffect(() => {
    axios
      .get('http://localhost:3001/open-api/patient/all')
      .then((response) => {
        setAllPatients(response.data)
      })
  }, [])

  console.log(allPatients)

  const handleSubmit = (event) => {
    event.preventDefault()

    const preparedData = {
      patientId: selectedPatient.patientId,
      doctorId: doctor._id,
      date: appointmentDate
    }

    axios
      .post(`http://localhost:3001/open-api/appointment/`, preparedData)
      .then(() => {
        alert("A consulta foi criada!");
      })
      .catch(() => {
        alert("Ocorreu um erro. Tente novamente!");
      });
  }

  return (
    <div>
      <PatientSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className={styles.listContainer}>
        {filteredPatients.map((post, key) => (
          <div
            key={key}
            className={`${styles.patientContainer} ${selectedPatient === post ? styles.active : ""}`}
            onClick={() => setSelectedPatient(post)}
            aria-hidden="true"
          >
            <div className={styles.patientName}>{post.name}</div>
            <div className={styles.patientItem}>email: {post.email}</div>
            <div className={styles.patientItem}>cpf: {post.cpf}</div>
            <div className={styles.patientItem}>celular: {post.cellphone}</div>
          </div>
        ))}
      </div>

      <form className={styles.endAppointmentContainer} onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns} className={styles.datePickerContainer}>
          <DatePicker
            className={styles.datePickerContainer}
            label="Data da Consulta"
            inputFormat="dd/MM/yyyy"
            value={appointmentDate}
            onChange={date => setAppointmentDate(date)}
            renderInput={(props) => (
              <TextField {...props} helperText="" />
            )}
          />
        </LocalizationProvider>

        <TextField
          className={styles.patientNameContainer}
          InputProps={{ readOnly: true }}
          InputLabelProps={{ shrink: true }}
          id="standard-read-only-input"
          label="Nome do Paciente"
          value={selectedPatient?.name}
        />

        <input className={styles.submitButton} type="submit" value="CRIAR CONSULTA" />
      </form>
    </div>
  );
};

export default Appointment;
