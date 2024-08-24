import React from "react";
import Header from "../../../../components/Header";
import UsersFormEdit from "./UsersFormEdit";
import { useTranslation } from "react-i18next";

export default function UsersEdit() {
  const { t } = useTranslation();
  return (
    <div>
      <Header text={t("changeuser")} />
      <UsersFormEdit />
    </div>
  );
}
