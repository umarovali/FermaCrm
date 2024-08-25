import React from 'react'
import Header from '../../../components/Header'
import { useTranslation } from "react-i18next";
import { SearchCouriers } from "../../../components/Search";
import CouriersTable from './CouriersTable';

export default function Couriers() {
  const { t } = useTranslation();

    return (
        <>
            <Header text={t("couriers")} />
            <SearchCouriers />
            <CouriersTable />
        </>
    )
}
