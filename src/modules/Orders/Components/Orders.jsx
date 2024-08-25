import React from 'react'
import Header from '../../../components/Header'
import { useTranslation } from "react-i18next";
import OrdersTable from './OrdersTable';
import { SearchOrders } from '../../../components/Search';

export default function Orders() {
  const { t } = useTranslation();

  return (
    <>
      <Header text={t("orders")} />
      <SearchOrders />
      <OrdersTable />
    </>
  )
}
