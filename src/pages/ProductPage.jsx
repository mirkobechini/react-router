import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import axios from 'axios'
import ProductCard from "../components/ProductCard"

export default function ProductPage() {

    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const endpoint = `https://fakestoreapi.com/products/${id}`

    function fetchData(endpoint) {
        axios.get(endpoint)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => {
                console.error(err);

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
                <div className="container-fluid text-center">
                    <h1> Here is your product</h1>
                </div>
                {product != null ?
                    <ProductCard product={product} />
                    :
                    <div className="loading">Loading...</div>
                }
            </div>
        </main>
    )
}