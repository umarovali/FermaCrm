import React from 'react'
import Clients from './components/Clients'
import { Route, Routes } from 'react-router-dom'

export default function ClientsPage() {
    return (
        <Routes>
            <Route index element={<Clients />} />
        </Routes>
    )
}
