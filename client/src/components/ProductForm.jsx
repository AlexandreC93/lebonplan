import React, { useState } from 'react'
import NavBar from './NavBar'

export default function ProductForm() {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescri] = useState("")
    const [image, setImage] = useState("")
    const [infos, setInfos] = useState("")

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
    const handleInfos = (e) => {
        setInfos(e.target.value)
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
            infos
        })
    }

    return (
        <div id="product-form">
            <NavBar/>

            <form onSubmit={(e) => {
                e.preventDefault()
                fetch('http://localhost:4000/product/admin', requestOptions)
                    .then(res => {
                        console.log(res);
                        res.json()
                    })
            }}>
                <div id='input-form'>

                    <input type="text" name="title" className="input" value={title}
                        placeholder="Product title..." onChange={handleTitle}  />

                    <input type="number" name="price" className="input" value={price}
                        placeholder="Price..." onChange={handlePrice} />
                        
                    <input type="text" name="description" className="input" value={description}
                        placeholder="Description..." onChange={handleDescri} />

                    <input type="upload" name="image" className="input" value={image}
                        placeholder="Upload files..." onChange={handleImage} />

                    <input type="text" name="infos" className="input" value={infos}
                        placeholder="Infos..." onChange={handleInfos} />

                    <input type="submit" value="Submit product" />
                </div>
            </form>
        </div>
    )
}
