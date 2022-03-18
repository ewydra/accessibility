import { ProductListItem } from "./ProductListItem";
import { useData } from "../hooks/useData";
import styled from "styled-components";

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -16px;
`;

export function ProductList() {
  const { data } = useData();
  return (
    <ProductListWrapper>
      {data.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ProductListWrapper>
  );
}
