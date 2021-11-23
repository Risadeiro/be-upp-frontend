import { useState, useEffect } from "react";
import axios from "axios";
import PatientSearch from "./patientSearch/PatientSearch";
import styles from "./Appointment.module.css";
import data from "./pacienteTest.json";
import { Paper, TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/lab";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";

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

  const [allPatients, setAllPatients] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [selectedPatient, setSelectedPatient] = useState();
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const filteredPatients = filterPosts(data, searchQuery);

  useEffect(() => {
    axios.get("http://localhost:3001/open-api/patient/all").then((response) => {
      setAllPatients(response.data);
    });
  }, []);

  console.log(allPatients);

  const handleSubmit = (event) => {
    event.preventDefault();

    const preparedData = {
      patientId: selectedPatient.patientId,
      doctorId: doctor._id,
      date: appointmentDate.getTime(),
    };

    axios
      .post(`http://localhost:3001/open-api/appointment/`, preparedData)
      .then((response) => {
        alert("A consulta foi criada! ", response);
      })
      .catch(() => {
        alert("Ocorreu um erro. Tente novamente!");
      });
  };

  return (
    <div>
      <PatientSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Paper
        elevation={3}
        className={styles.listContainer}
      >
        {filteredPatients.map((post, key) => (
          <Card
            elevation={4}
            key={key}
            className={`${styles.patientCard} ${selectedPatient === post ? styles.activePatient : ""}`}
            onClick={() => setSelectedPatient(post)}
            aria-hidden="true"
          >
            <CardHeader title={post.name} subheader={post.email} />

            <CardContent>
              <div className={styles.infosContainer}>
                <div className={styles.infoName}>CPF:</div>
                <div className={styles.infoValue}>{post.cpf}</div>
              </div>
              <div className={styles.infosContainer}>
                <div className={styles.infoName}>Celular:</div>
                <div className={styles.infoValue}>{post.cellphone}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </Paper>

      <form className={styles.endAppointmentContainer} onSubmit={handleSubmit}>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          className={styles.datePickerContainer}
        >
          <DatePicker
            className={styles.datePickerContainer}
            label="Data da Consulta"
            inputFormat="dd/MM/yyyy"
            value={appointmentDate}
            onChange={(date) => setAppointmentDate(date)}
            renderInput={(props) => <TextField {...props} helperText="" />}
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

        <input
          className={styles.submitButton}
          type="submit"
          value="CRIAR CONSULTA"
        />
      </form>
    </div>
  );
};

export default Appointment;
