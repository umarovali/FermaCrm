import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Components/Orders'
import OrdersAdd from './pages/OrdersAdd/OrdersAdd'

export default function OrdersPage() {
    return (
        <Routes>
            <Route path='/' element={<Orders />} />
            <Route path='/order-add' element={<OrdersAdd />} />
        </Routes>
    )
}
