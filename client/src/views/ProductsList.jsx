import React from 'react'
import NavBar from '../components/NavBar'
import Product from '../components/Product'
import Soum from '../img/soum.jpg'
import Tank from '../img/tank.jpg'
import Plane from '../img/plane.jpg'

export default function ProductsList() {
    return (
        <>
            <NavBar/>
        <div id="products-list">
            <Product image={Soum}/>
            <Product image={Tank}/>
            <Product image={Plane}/>
            
        </div>
        </>
    )
}
