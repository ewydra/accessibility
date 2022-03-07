import { createContext } from "react";
import { data } from "../data";

const ProductsContext = createContext({ products: [] });

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ products: data }}>
      {children}
    </ProductsContext.Provider>
  );
};
