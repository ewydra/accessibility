import { ProductListItem } from "./ProductListItem";
import { useData } from "../hooks/useData";
import styled from "styled-components";

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px;
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
