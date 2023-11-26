import { products } from "../api/products.json";

export const getProductById = (id) => {

  return products.find(product => product.id == id);

};

