import React from "react";
import Header from "../../../../components/Header";
import UserFormLook from "./UserFormLook";

export default function UserLook() {
  return (
    <div>
      <Header text="Посмотреть администратора" />
      <UserFormLook/>
    </div>
  );
}
