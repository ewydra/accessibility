import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useData } from "../hooks/useData";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 24px;
`;

const ProductImageWrapper = styled.div`
  ${(props) => props.theme.mediaQueries.tablet} {
    flex-basis: 33.333%;
    max-width: 33.333%;
  }
`;

const ProductImage = styled.img`
  height: auto;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
`;

const ProductInfoWrapper = styled.div`
  ${(props) => props.theme.mediaQueries.tablet} {
    flex-basis: 66.666%;
    max-width: 66.666%;
  }
`;

const ProductInfo = styled.div`
  padding: 0 16px 16px;

  & h1 {
    margin-top: 0;
  }
`;

export function ProductDetails() {
  const { productId } = useParams();
  const { getProduct } = useData();

  const product = useMemo(() => {
    return getProduct(productId);
  }, [productId, getProduct]);

  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductImage src={product.imageUrl} alt={product.name} />
      </ProductImageWrapper>
      <ProductInfoWrapper>
        <ProductInfo>
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
          <p>{product.description}</p>
          <button>Dodaj do koszyka</button>
        </ProductInfo>
      </ProductInfoWrapper>
    </ProductWrapper>
  );
}
