import React from 'react';

import ProductEditForm from './ProductEditForm'; 
import Header from '../../../../components/Header';
import { useTranslation } from 'react-i18next';

export default function ProductEdit() {

    const { t } = useTranslation();

  return (
    <div>
      <Header text={t("changeproduct")} />
      <ProductEditForm /> 
    </div>
  );
}