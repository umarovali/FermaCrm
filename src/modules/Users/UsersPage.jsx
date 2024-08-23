import React from 'react'
import User from './components/User'
import { Route, Routes } from 'react-router-dom'
import UserAdd from './components/UserAdd'

export default function UsersPage() {
    return (
        <Routes>
            <Route path='/' element={<User />} />
            <Route path='/user_add' element={<UserAdd />} />
        </Routes>
    )
}
