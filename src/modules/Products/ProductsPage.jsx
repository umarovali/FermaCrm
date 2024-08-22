import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './components/Product'

export default function ProductsPage() {
    return (
        <Routes>
            <Route index element={<Product />} />
        </Routes>
    )
}
