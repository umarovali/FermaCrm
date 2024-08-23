import React from "react";
import Header from "../../../../components/Header";
import UsersFormEdit from "./UsersFormEdit";

export default function UsersEdit() {
  return (
    <div>
      <Header text="Изменить пользователя" />
      <UsersFormEdit/>
    </div>
  );
}
