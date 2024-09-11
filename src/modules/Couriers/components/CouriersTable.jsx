import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";
import axios from "axios";
import CouriersItem from "./CouriersItem";
import Loading from "../../../assets/images/loading.svg"; 


export default function CouriersTable() {
  const { t } = useTranslation();
  const [couriers, setCouriers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.bbk.kg/admin/couriers/")
      .then((res) => {
        console.log(res.data.data.records);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

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
                    {t("salary")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {couriers.map((item, index) => (
                  <CouriersItem
                    key={item.id}
                    id={index + 1}
                    name={item.user.full_name}
                    tel={item.user.phone_number}
                    salary={item.salary || "N/A"}
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
