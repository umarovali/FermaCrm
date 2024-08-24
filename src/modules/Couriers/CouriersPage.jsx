import React from 'react'
import Couriers from './components/Couriers'
import { Route, Routes } from 'react-router-dom'

export default function CouriersPage() {
    return (
        <Routes>
            <Route path='/' element={<Couriers />} />
        </Routes>
    )
}
