import React from "react";
import Header from "../../../../components/Header";
import { useTranslation } from "react-i18next";
import CouriersForm from "./CouriersForm";

export default function CouriersAdd() {
  const { t } = useTranslation();
  return (
    <div>
      <Header text={t("couriersadd")} />
      <CouriersForm />
    </div>
  );
}
