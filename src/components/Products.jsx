import { useSelector } from "react-redux";
import { products } from "../api/products.json";
import { ProductItems } from "./ProductItems";
import { SearchBar } from "./SearchBar";

export const Products = () => {

  const { search } = useSelector(state => state.search);
  const productsFiltered = products.filter(product => (product.category.toLowerCase().includes(search.toLowerCase())) || (product.title.toLowerCase().includes(search.toLowerCase())));
  let tags = {};
  productsFiltered.map(product => tags[product.category] = (tags[product.category] || 0) + 1);

  return (
    <>
      <SearchBar />
      <section className="container products-list">
        <h4 className="fw-bold text-center mt-4">Search results of "{search}": {productsFiltered.length}</h4>
        <div className="text-center">
          {
            Object.entries(tags).map(([key, value]) => (
              <span key={key} className="badge text-bg-warning mx-2">
                {key} - {value}
              </span>))
          }
        </div>
        <ul>
          {
            (productsFiltered.length > 0) ?
              productsFiltered.map(product => <ProductItems key={product.id} product={product} />) :
              <li className="fw-bold text-center">No results</li>
          }
        </ul>
      </section>
    </>
  );

};
