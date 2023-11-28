import { Link } from "react-router-dom";
import { getRating } from "../helpers";

export const ProductItems = ({ product }) => {

  return (
    <>
      <li className="my-4">
        <div className="d-flex aling-items-center justify-content-center">
          <img src={product.thumbnail} className="product-list-img me-3" alt={product.title} />
          <div className="info-product-list d-flex flex-column justify-content-center">
            <h3 className="fw-bold">{product.title}</h3>
            <p className="product-descr">{product.description}</p>
            <span className="fw-bold">{product.price}$ - {getRating(Math.floor(product.rating))}</span>
            <Link to={`/items/${product.id}`} className="btn btn-warning me-auto fw-bold mt-3">Ver producto</Link>
          </div>
        </div>
      </li>
    </>
  )
}
