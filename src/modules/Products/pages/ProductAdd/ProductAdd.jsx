import React from 'react'
import Header from "../../../../components/Header";
import ProductForm from './ProductForm';

export default function ProductAdd() {
  return (
    <>
      <Header text="Добавить продукт" />
      <ProductForm />
    </>
  )
}
