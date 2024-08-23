import React from "react";
import Header from "../../../../components/Header";
import UserFormLook from "./UserFormLook";

export default function Look() {
  return (
    <div>
      <Header text="Посмотреть администратора" />
      <UserFormLook/>
    </div>
  );
}
