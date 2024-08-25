import React from "react";
import Header from "../../../../components/Header";
import { useTranslation } from "react-i18next";
import ClientFormLook from "./ClientFormLook";

export default function ClientLook() {
  const { t } = useTranslation();

  return (
    <div>
      <Header text={t("lookclient")} />
      <ClientFormLook />
    </div>
  );
}
