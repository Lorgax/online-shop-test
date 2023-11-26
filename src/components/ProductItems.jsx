import { Link } from "react-router-dom";

export const ProductItems = ({ product }) => {

  return (
    <>
      <li className="my-4">
        <div className="d-flex aling-items-center justify-content-center">
          <img src={product.thumbnail} className="product-list-img me-3" alt={product.title} />
          <div className="info-product-list d-flex flex-column justify-content-center">
            <h3 className="fw-bold">{product.title}</h3>
            <p>{product.description}</p>
            <span className="fw-bold">{product.price}$ - {product.rating}★</span>
            <Link to={`/items/${product.id}`} className="btn btn-warning fw-bold w-25 mt-3">Ver producto</Link>
          </div>
        </div>
      </li>
    </>
  )
}
