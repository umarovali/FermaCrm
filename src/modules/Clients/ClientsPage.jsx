import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clients from './components/Clients'
import ClientAdd from './pages/ClientAdd/ClientAdd'
import ClientEdit from './pages/ClientEdit/ClientEdit'
import ClientLook from './pages/ClientLook/ClientLook'


export default function ClientsPage() {
    return (
        <Routes>
            <Route path='/' element={<Clients />} />
            <Route path='/client-add' element={<ClientAdd />} />
            <Route path='/client-edit' element={<ClientEdit />} />
            <Route path='/client-look/:id' element={<ClientLook />} />

        </Routes>
    )
}