import React from 'react'
import Header from "../../../../components/Header";
import { useTranslation } from "react-i18next";
import CouriersFormEdit from "./CouriersFormEdit"

export default function CouriersEdit() {
  const { t } = useTranslation();
  return (
    <div>
      <Header text={t("couriersedit")} />
      <CouriersFormEdit/>
    </div>
  )
}
