import React from 'react'
import Header from '../../../components/Header'
import { useTranslation } from "react-i18next";

export default function Couriers() {
  const { t } = useTranslation();

    return (
        <>
            <Header text={t("couriers")} />
        </>
    )
}
