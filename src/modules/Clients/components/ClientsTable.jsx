import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";
import ClientsItem from "./ClientsItem";

export default function ClientsTable() {
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
                <ClientsItem
                  id={1}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
                <ClientsItem
                  id={2}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
                <ClientsItem
                  id={3}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
                <ClientsItem
                  id={4}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
                <ClientsItem
                  id={5}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
                <ClientsItem
                  id={6}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
                <ClientsItem
                  id={7}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
                <ClientsItem
                  id={8}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  iin="111 333 444 666"
                  courier="Курьер"
                />
              </tbody>
            </table>
            <PaginationTable />
          </div>
        </div>
      </div>
    </section>
  );
}
