import React, { useState } from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function ProductForm() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescri] = useState("")
    const [image, setImage] = useState("")
    const [cities, setCities] = useState("")

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleDescri = (e) => {
        setDescri(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handleCities = (e) => {
        setCities(e.target.value)
    }


    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            price,
            description,
            image,
            cities
        })
    }

    return (
        <>
            <NavBar />
            <div id="content">
                <div id="product-form">

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        fetch('http://localhost:4000/product/admin', requestOptions)
                            .then(res => {
                                console.log(res);
                                res.json()
                            })
                    }}>
                        <div id='input-form'>

                            <p className="text-form">Enter the product title</p>

                            <input type="text" name="title" className="input" value={title}
                                placeholder="Product title..." onChange={handleTitle} />

                            <p className="text-form">Enter your price</p>

                            <input type="number" name="price" className="input" value={price}
                                placeholder="Price..." onChange={handlePrice} />

                            <p className="text-form">Enter a description</p>

                            <input type="text" name="description" className="input" value={description}
                                placeholder="Description..." onChange={handleDescri} />

                            <p className="text-form">Upload images</p>

                            <input type="upload" name="image" className="input" value={image}
                                placeholder="Upload files..." onChange={handleImage} />

<<<<<<< HEAD
                            <p className="text-form">Enter your infos</p>

                            <input type="text" name="infos" className="input" value={infos}
                                placeholder="Infos..." onChange={handleInfos} />
=======

                            <label htmlFor="cities" className="input title">Select your city
                                <select name="cities" className="input">
                                    <option value="Paris">Paris</option>
                                    <option value="Lyon">Lyon</option>
                                    <option value="Marseille">Marseille</option>
                                </select>
                            </label>
>>>>>>> 4c4b9153cda040caa770a7a1f74da8c22ff9fef0

                            <input className="product-submit" type="submit" value="Submit product" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
