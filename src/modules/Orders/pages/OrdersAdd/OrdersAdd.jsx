import React from 'react'
import Header from '../../../../components/Header'
import OrdersForm from './OrdersForm'

export default function OrdersAdd() {
  return (
    <>
      <Header text={"Добавить заказ"} />
      <OrdersForm />
    </>
  )
}
