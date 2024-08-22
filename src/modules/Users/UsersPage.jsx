import React from 'react'
import User from './components/User'
import { Route, Routes } from 'react-router-dom'

export default function UsersPage() {
    return (
        <Routes>
            <Route index element={<User />} />
        </Routes>
    )
}
