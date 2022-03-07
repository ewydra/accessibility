import { useCallback } from "react";
import { data } from "../data";

export function useData() {
  const getProduct = useCallback(
    (id) => data.find((product) => product.id === Number(id)),
    []
  );

  return {
    data,
    getProduct,
  };
}
