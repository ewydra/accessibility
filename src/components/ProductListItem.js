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
  background-color: ${(props) => props.theme.colors.white};
`;

const ProductImage = styled.img`
  height: auto;
  width: 100%;
`;

const ProductLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  margin: 16px;
  text-decoration: none;

  ${(props) =>
    props.theme.mode === "highContrast" &&
    `
      border: 1px solid ${props.theme.colors.primary.main};
      &:hover {
        border: 1px solid ${props.theme.colors.secondary};
        & > * {
          color: ${props.theme.colors.secondary} !important;
        }
      }
  `}
`;

const ProductInfo = styled.header`
  padding: 0 8px 8px;
  color: ${(props) =>
    props.theme.mode === "highContrast"
      ? props.theme.colors.primary.main
      : props.theme.colors.text};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  text-align: center;
`;

export function ProductListItem({ product }) {
  const { id, name, price, imageUrl } = product;

  return (
    <ProductWrapper>
      <ProductLink to={`/${id}`} aria-label={name}>
        <ProductImageWrapper>
          <ProductImage src={imageUrl} alt={name} />
        </ProductImageWrapper>
        <ProductInfo>
          <h1>{name}</h1>
          <span>{price}</span>
        </ProductInfo>
      </ProductLink>
    </ProductWrapper>
  );
}
