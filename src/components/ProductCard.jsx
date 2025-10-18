export default function ProductCard({product}){
    
    return(
        <div className="card col-12 col-sm-5 col-lg-2 mx-auto">
                <div className="card-header">
                    <h3>{product.title}</h3>
                </div>
                <div className="ratio ratio-1x1 bg-danger-subtle">
                    <img src={product.image} className="card-img-top p-2" style={{ objectFit: "contain" }}></img>
                </div>
                <div className="card-body position-relative">
                    <div className="badge btn btn-primary position-absolute top-0 start-0"> {product.category}</div>
                    <p className="overflow-hidden mt-3" style={{ maxHeight: "4.5rem" }}>
                        {product.description}
                    </p>
                    <span className="d-block"> <i className="bi bi-currency-euro"></i>{product.price} </span>
                    <span className="d-block text-warning"> <i className="bi bi-star-fill me-1"></i> {product.rating.rate}</span>
                </div>
            </div>
    )
}