import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import ProductAdd from './pages/ProductAdd/ProductAdd';
import ProductEdit from './pages/ProductEdit/ProductEdit';
import ProductLook from './pages/ProductLook/ProductLook';

export default function ProductsPage() {
    return (
        <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/product-add' element={<ProductAdd />} />
            <Route path='/product-edit' element={<ProductEdit />} />
            <Route path='/product-look/:id' element={<ProductLook />} />
        </Routes>
    );
}
