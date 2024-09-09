import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import UserItem from "./UserItem";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";
import axios from "axios";

export default function UserTable() {
  const { t } = useTranslation();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get("https://api.bbk.kg/admin/users")
      .then((res) => {
        setUser(res.data.data.records);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>{t("loading")}</p>;

  if (error) return <p>{t("error")}: {error}</p>;


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
                {user.map((item) => (
                  <UserItem
                    key={item.id}
                    item={item}
                    id={1}
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
