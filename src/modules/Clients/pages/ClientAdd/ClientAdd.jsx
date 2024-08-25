import React from "react";
import Header from "../../../../components/Header";
import ClientForm from "./ClientForm"
import { useTranslation } from "react-i18next";

export default function ClientAdd() {

  const { t } = useTranslation();

  return (
    <div>
      <Header text={t("addclient")} />
      <ClientForm />
    </div>
  );
}
