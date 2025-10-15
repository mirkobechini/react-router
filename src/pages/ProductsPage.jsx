import axios from "axios"
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";


export default function ProductsPage({ productsEP }) {

    const [products, setProducts] = useState([])


    function fetchData() {
        axios.get(productsEP)
            .then(res => {
                console.log(res.data[0]);
                setProducts(res.data)
            })
            .catch(err => {
                console.error(err);

            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-5">

                    {products.map(product =>
                        <div className="col my-3" key={product.id}>
                            <ProductCard product={product}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}