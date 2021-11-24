import {useMemo} from "react";
import Table from "./table/Table";
import dummyData from "./dummyData.json";

const ListPatient = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Data Consulta",
        accessor: "date",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "CPF",
        accessor: "cpf",
      },
      {
        Header: "Celular",
        accessor: "phone",
      },
      {
        Header: "Data Nascimento",
        accessor: "birth",
      },
    ],
    []
  );

  const data = useMemo(() => dummyData, []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default ListPatient;
