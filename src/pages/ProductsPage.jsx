import axios from "axios"
import { useEffect, useState } from "react";
import ProductPreviewCard from "../components/ProductPreviewCard";


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
                            <ProductPreviewCard product={product} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}