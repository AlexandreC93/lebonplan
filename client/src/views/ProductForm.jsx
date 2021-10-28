import React, { useState } from 'react'
import Footer from '../components/Footer'
import History from '../components/History'
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
                                History.push('/')

                            })
                    }}>
                        <div id='input-form'>

                            <label htmlFor="title" className="text-form">Enter the product title

                                <input type="text" name="title" className="input" value={title}
                                    placeholder="Product title..." onChange={handleTitle} />
                            </label>

                            <label htmlFor="price" className="text-form">Enter your price

                                <input type="number" name="price" className="input" value={price}
                                    placeholder="Price..." onChange={handlePrice} />
                            </label>
                            <label htmlFor="description" className="text-form">Enter a description

                                <input type="text" name="description" className="input" value={description}
                                    placeholder="Description..." onChange={handleDescri} />
                            </label>
                            <label htmlFor="image" className="text-form">Upload images

                                <input type="upload" name="image" className="input" value={image}
                                    placeholder="Upload files..." onChange={handleImage} />
                            </label>

                            <label htmlFor="cities" className="input title">Select your city
                                <select value={cities} className="input" onChange={handleCities}>
                                    <option name="cities" value={cities}>Paris</option>
                                    <option name="cities" value={cities}>Lyon</option>
                                    <option name="cities" value={cities}>Marseille</option>
                                </select>
                            </label>

                            <input className="product-submit" type="submit" value="Submit product" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
