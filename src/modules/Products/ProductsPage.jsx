import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './components/Product'
import ProductAdd from './pages/ProductAdd'

export default function ProductsPage() {
    return (
        <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/product-add' element={<ProductAdd />} />
        </Routes>
    )
}
