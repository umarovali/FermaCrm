import React from 'react';
import Header from '../../../components/Header';
import { SearchUser } from "../../../components/Search";
import { useTranslation } from "react-i18next";
import ClientsTable from './ClientsTable';

export default function Clients() {
  const { t } = useTranslation();

  return (
    <>
      <Header text={t("customers")} />
      <SearchUser />
      <ClientsTable />
    </>
  )
}
