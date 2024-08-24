import React from 'react'
import Header from '../../../components/Header'
import { SearchProduct } from "../../../components/Search"
import ProductTable from './ProductTable'
import { useTranslation } from "react-i18next";

export default function Product() {
  const { t } = useTranslation();
    return (
        <>
            <Header text={t("products")} />
            <SearchProduct />
            <ProductTable />
        </>
    )
}
