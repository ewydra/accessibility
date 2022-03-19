import { useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import { useData } from "../hooks/useData";

const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  border: 1px solid ${(props) => props.theme.colors.border};
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
        <ProductImage src={product.imageUrl} aria-hidden="true" />
      </ProductImageWrapper>
      <ProductInfoWrapper>
        <ProductInfo>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <Button>Add to cart</Button>
        </ProductInfo>
      </ProductInfoWrapper>
    </ProductWrapper>
  );
}
