import React from "react";
import Header from "../../../../components/Header";
import UserFormLook from "./UserFormLook";
import { useTranslation } from "react-i18next";

export default function UserLook() {
  const { t } = useTranslation();
  return (
    <div>
      <Header text={t("viewadministrator")} />
      <UserFormLook/>
    </div>
  );
}
