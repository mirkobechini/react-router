import axios from "axios"
import { useEffect, useState } from "react";


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
                <div className="row row-cols-sm-2 row-cols-md-4 row-cols-lg-6">

                    {products.map(product =>
                        <div className="col my-3" key={product.id}>
                            <div className="card h-100  ">
                                <div className="card-header">
                                    <h3 className="text-truncate d-block">{product.title}</h3>
                                </div>
                                <div className="card-body position-relative">
                                    <p className="text-truncate text-hidden">
                                        {product.description}
                                    </p>
                                    <span className="d-block"> <i className="bi bi-currency-euro"></i>{product.price} </span>
                                    <span className="d-block text-warning"> <i className="bi bi-star-fill me-1"></i> {product.rating.rate}</span>
                                    <div className="badge btn btn-primary position-absolute top-0 end-0"> {product.category}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}