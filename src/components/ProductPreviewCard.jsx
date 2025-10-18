export default function ProductPreviewCard({ product }) {
    return (
        <>
            <div className="card h-100">
                <div className="card-header">
                    <h3 className="text-truncate d-block">{product.title}</h3>
                </div>
                <div className="ratio ratio-1x1 my-3">
                    <img src={product.image} className="card-img-top" style={{ objectFit: "contain" }}></img>
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
        </>
    )
}