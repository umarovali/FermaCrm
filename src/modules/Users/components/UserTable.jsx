import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import UserItem from "./UserItem";
import PaginationTable from "../../../components/PaginationTable";
import { useTranslation } from "react-i18next";

export default function UserTable() {
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
                    {t("role")}
                    <IoIosArrowDown className="th_icon" />
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <UserItem
                  id={1}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
                />
                <UserItem
                  id={2}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
                />
                <UserItem
                  id={3}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
                />
                <UserItem
                  id={4}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
                />
                <UserItem
                  id={5}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
                />
                <UserItem
                  id={6}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
                />
                <UserItem
                  id={7}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
                />
                <UserItem
                  id={8}
                  name="Janibek Maxatov"
                  tel="+99699 807 01 16"
                  role="Курьер"
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
