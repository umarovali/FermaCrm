import React from "react";
import Header from "../../../../components/Header";
import ProductFormLook from "./ProductFormLook";
import { useTranslation } from "react-i18next";

export default function ProductLook() {

  const { t } = useTranslation();


  return (
    <div>
      <Header text={t("viewproducts")} />
      <ProductFormLook/>
    </div>
  );
}
