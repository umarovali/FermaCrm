import React from "react";
import Header from "../../../components/Header";
import UserTable from "./UserTable";
import { SearchUser } from "../../../components/Search";
import { useTranslation } from "react-i18next";

export default function User() {
  const { t } = useTranslation();
  return (
    <>
      <Header text={t("users")} />
      <SearchUser />
      <UserTable />
    </>
  );
}
