import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UserItem from "./UserItem";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Loading from "../../../assets/images/loading.svg"; 

export default function UserTable() {
  const { t } = useTranslation();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.bbk.kg/admin/users")
      .then((res) => {
        console.log(res.data);
        setUser(res.data.data.records || res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://api.bbk.kg/admin/users/${id}`)
      .then(() => {
        setUser((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
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
                    {t("role")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {user.map((item, index) => (
                  <UserItem
                    key={item.id}
                    id={item.id}
                    item={item}
                    onDelete={handleDelete}
                    index={index + 1}
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
