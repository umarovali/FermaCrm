import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";
import CouriersItem from "./CouriersItem";

export default function CouriersTable() {
  const { t } = useTranslation();
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
                <CouriersItem
                  id={1}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
                <CouriersItem
                  id={2}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
                <CouriersItem
                  id={3}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
                <CouriersItem
                  id={4}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
                <CouriersItem
                  id={5}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
                <CouriersItem
                  id={6}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
                <CouriersItem
                  id={7}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
                <CouriersItem
                  id={8}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  salary="12 000"
                />
              </tbody>
            </table>
          </div>
            <PaginationTable />
        </div>
      </div>
    </section>
  );
}
