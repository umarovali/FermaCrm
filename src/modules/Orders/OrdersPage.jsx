import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Components/Orders'
import OrdersAdd from './pages/OrdersAdd/OrdersAdd'
import OrdersEdit from './pages/OrdersEdit/OrdersEdit'
import OrdersLook from './pages/OrdersLook/OrdersLook'

export default function OrdersPage() {
    return (
        <Routes>
            <Route path='/' element={<Orders />} />
            <Route path='/orders-add' element={<OrdersAdd />} />
            <Route path='/orders-edit' element={<OrdersEdit />} />
            <Route path='/orders-look' element={<OrdersLook />} />
        </Routes>
    )
}
