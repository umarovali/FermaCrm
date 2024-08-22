import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Orders from './Components/Orders'

export default function OrdersPage() {
    return (
        <Routes>
            <Route index element={<Orders />} />
        </Routes>
    )
}
