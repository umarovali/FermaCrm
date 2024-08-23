import React from "react";
import Header from "../../../components/Header";
import UserTable from "./UserTable";
import { SearchUser } from "../../../components/Search";

export default function User() {
  return (
    <>
      <Header text="Пользователи" />
      <SearchUser />
      <UserTable />
    </>
  );
}
