import React from 'react'
import Header from "../../../../components/Header";
import { useTranslation } from "react-i18next";
import CouriersLookForm from "./CouriersFormLook"

export default function CouriersLook() {
  const { t } = useTranslation();
  return (
    <div>
      <Header text={t("couriersadd")} />
      <CouriersLookForm />
    </div>
  )
}
