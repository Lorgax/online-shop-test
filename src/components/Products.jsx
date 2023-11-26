import { useSelector } from "react-redux";
import { products } from "../api/products.json";
import { ProductItems } from "./ProductItems";

export const Products = () => {

  const { search } = useSelector(state => state.search);
  const productsFiltered = products.filter(product => (product.category.toLowerCase().includes(search.toLowerCase())) || (product.title.toLowerCase().includes(search.toLowerCase())));

  return (
    <>
      <section className="container products-list">
        <h4 className="fw-bold text-center mt-4">Resultados de búsqueda de "{search}": {productsFiltered.length}</h4>
        {
          productsFiltered.map(product => (
            <span className="badge text-bg-warning mx-2">
              {product.category}
            </span>))
        }
        <ul>
          {
            (productsFiltered.length > 0) ?
              productsFiltered.map(product => <ProductItems key={product.id} product={product} />) :
              <li className="fw-bold text-center">No se ha encontrado ningún resultado</li>
          }
        </ul>
      </section>
    </>
  );

};
