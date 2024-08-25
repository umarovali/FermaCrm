import React from "react";
import Header from "../../../../components/Header";
import ClientFormEdit from "../ClientEdit/ClientFormEdit"
import { useTranslation } from "react-i18next";

export default function ClientEdit() {
  const { t } = useTranslation();

  return (
    <div>
      <Header text={t("editclient")} />
      <ClientFormEdit />
    </div>
  );
}
