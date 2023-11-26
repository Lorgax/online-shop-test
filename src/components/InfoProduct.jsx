import { useParams } from "react-router-dom";
import { useMemo } from "react";
import { getProductById } from "../helpers";

export const InfoProduct = () => {

  const { id } = useParams();
  const product = useMemo(() => getProductById(id), [id]);

  return (
    <>
      <section className="info-product container text-center my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-8 col-md-12">
            <img className="final-prod-img" src={product.thumbnail} alt={product.title} />
          </div>
          <div className="col-4 col-md-12">
            {product.images.map(imgs => (<img className="final-extra-prod-img" src={imgs} alt={product.title} />))}
          </div>
          <div className="col-12">
            <h2 className="fw-bold mb-4">{product.title}</h2>
            <div className="d-flex justify-content-around align-items-center">
              <h5>{product.price}$</h5>
              <span>{product.rating}★</span>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
      </section>
    </>
  );

};
