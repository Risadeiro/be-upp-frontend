// import {useEffect, useState, useMemo} from "react";
// import axios from "axios";
// import {useState, useMemo} from "react";
import {useMemo} from "react";
import Table from "./table/Table";
import {dummyData} from "./dummyData";

const ListPatient = () => {
  // const [data, setData] = useState();

  /* useEffect(() => {
    axios
      .get("http://localhost:9090/open-api/doctor/appointment")
      .then((response) => {
        response.map((item) => {
          item.birth = new Date(item.birth);
          item.date = new Date(item.date);
        });

        setData(response.data);
      });
  }, [data]); */

  const columns = useMemo(
    () => [
      {
        id: "date",
        label: "Data Consulta",
      },
      {
        id: "name",
        label: "Nome",
      },
      {
        id: "email",
        label: "Email",
      },
      {
        id: "cpf",
        label: "CPF",
        disableSorting: "true",
      },
      {
        id: "phone",
        label: "Celular",
        disableSorting: "true",
      },
      {
        id: "birth",
        label: "Data Nascimento",
      },
    ],
    []
  );

  const data = useMemo(() => dummyData(), []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ListPatient;
