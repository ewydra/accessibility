import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductWrapper = styled.article`
  display: flex;
  ${(props) => props.theme.mediaQueries.tablet} {
    flex-basis: 50%;
    max-width: 50%;
  }

  ${(props) => props.theme.mediaQueries.computer} {
    flex-basis: 33%;
    max-width: 33%;
  }
`;

const ProductImageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  height: auto;
  width: 100%;
`;

const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin: 16px;
  text-decoration: none;
`;

const ProductInfo = styled.header`
  padding: 0 8px 8px;
  color: #494949;
  border-top: 1px solid #e8e8e8;
`;

export function ProductListItem({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <ProductWrapper>
      <ProductLink to={`/${id}`}>
        <ProductImageWrapper>
          <ProductImage src={imageUrl} alt={name} />
        </ProductImageWrapper>
        <ProductInfo>
          <h3>{name}</h3>
          <span>{price}</span>
        </ProductInfo>
      </ProductLink>
    </ProductWrapper>
  );
}
