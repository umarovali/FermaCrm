import React from 'react'
import Couriers from './components/Couriers'
import { Route, Routes } from 'react-router-dom'
import CouriersAdd from './pages/CouriersAdd/CouriersAdd'
import CouriersEdit from './pages/CouriersEdit/CouriersEdit'
import CouriersLook from './pages/CouriersLook/CouriersLook'

export default function CouriersPage() {
    return (
        <Routes>
            <Route path='/' element={<Couriers />} />
            <Route path='/couriers-add' element={<CouriersAdd />} />
            <Route path='/couriers-edit' element={<CouriersEdit />} />
            <Route path='/couriers-look' element={<CouriersLook />} />
        </Routes>
    )
}
