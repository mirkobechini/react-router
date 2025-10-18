import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import axios from 'axios'
import ProductCard from "../components/ProductCard"
import { Hourglass } from 'ldrs/react'

export default function ProductPage() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const endpoint = `https://fakestoreapi.com/products/${id}`

    function fetchData(endpoint) {
        axios.get(endpoint)
            .then(res => {
                if (res.data === "") {
                    throw new Error("Prodotto non trovato");
                }
                setProduct(res.data)

            })
            .catch(err => {
                console.error(err);
                navigate(-1)

            })
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData(endpoint)
        }, 2000)
    }, [id])

    return (
        <main>
            <div className="bg-primary-subtle vh-100">
                <div className="container-fluid text-center mb-4">
                    <h1> Here is your product</h1>
                </div>
                {product != null ?
                    <ProductCard product={product} />
                    :
                    <div>
                        <div className="container text-center">
                            <Hourglass
                                size="200"
                                bgOpacity="0.1"
                                speed="1.75"
                                color="white"
                            />
                        </div>
                        <div className=" container text-center mt-3 fs-2">
                            Loading...
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}