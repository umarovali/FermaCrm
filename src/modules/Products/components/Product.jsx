import React from 'react'
import Header from '../../../components/Header'
import { SearchProduct } from "../../../components/Search"
import ProductTable from './ProductTable'

export default function Product() {
    return (
        <>
            <Header text="Продукты" />
            <SearchProduct />
            <ProductTable />
        </>
    )
}
