import React from 'react'

export default function Product({image, alt}) {
    return (
        <>
        <div id="product">
            <img src={image} alt={alt} />

            <div id="info">
                <h2 className="title-product" >Product name</h2>
                <span className="price" className="price">Price</span>
                {/*user*/}
                {/*info*/}
                <p className="descri-product">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ipsum expedita recusandae facilis ad. Dolorem ipsa excepturi rem tenetur deserunt?</p>
            </div>
        </div>
        </>
    )
}
