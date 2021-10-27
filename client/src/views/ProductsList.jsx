import React from 'react'
import NavBar from '../components/NavBar'
import Product from '../components/Product'

export default function ProductsList() {
    return (
        <div id="products-list">
            <NavBar/>
            <Product/>
            <Product/>
            <Product/>
            
        </div>
    )
}
