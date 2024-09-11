import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ClientsItem from "./ClientsItem";
import Loading from "../../../assets/images/loading.svg"; 


export default function ClientsTable() {
  const { t } = useTranslation();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.bbk.kg/admin/clients/")
      .then((res) => {
        setClients(res.data.data.records);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://api.bbk.kg/admin/clients/${id}`)
      .then(() => {
        setClients((prevClients) => prevClients.filter((client) => client.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting client:", error);
        alert(t("deleteError"));
      });
  };

  if (loading)
    return (
      <center>
        <img className="loadin__img" src={Loading} alt="loading" />
      </center>
    );
  if (error)
    return (
      <p>
        {t("error")}: {error}
      </p>
    );

  return (
    <section>
      <div className="container">
        <div className="table_bg">
          <div className="table_container">
            <table className="table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>
                    {t("fullname")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th>
                    {t("telephone")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th>
                    {t("iin")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th>
                    {t("couriers")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {clients.map((item, index) => (
                  <ClientsItem
                    key={item.id}
                    count={index + 1}
                    id={item.id}
                    name={item.user.full_name}
                    tel={item.user.phone_number}
                    inn={item.inn}
                    courier={item.couriers} 
                    onDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <PaginationTable />
        </div>
      </div>
    </section>
  );
}
