import React from 'react'
import Header from "../../../../components/Header";
import ProductForm from './ProductForm';
import { useTranslation } from "react-i18next";

export default function ProductAdd() {
  const { t } = useTranslation();

  return (
    <>
      <Header text={t("addproduct")} />
      <ProductForm />
    </>
  )
}
