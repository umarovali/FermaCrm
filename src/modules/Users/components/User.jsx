import React from "react";
import Header from "../../../components/Header";
import UserTable from "./UserTable";
import Search from "../../../components/Search";

export default function User() {
  return (
    <>
      <Header text="Пользователи" />
      <Search to="/user/user_add" />
      <UserTable />
    </>
  );
}
