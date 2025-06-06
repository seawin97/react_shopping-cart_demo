import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button'


// 개별 상품 전체를 감싸는 카드 스타일 컴포넌트
const Wrapper = styled.div`
    padding: 30px;
    flex-basis: 500px;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    margin-bottom: 50px;
`;

const TitleText = styled.p`
    font-size: 27px;
    font-weight: 600;
`;

const DescriptionText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

const CategoryBanner = styled.p`
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    padding: 10px;
    border: 2px solid black;
    border-radius: 8px;
`;

const StyledImage = styled.img`
    width: 500px;
    height: 500px;
    display: block;
`;

// 개별 상품 정보를 표시하는 컴포넌트
function ProductListItem({ product, onClick }) {
    const imageSrc = product.images?.[0] || product.thumbnail;

    return (
      <Wrapper onClick={onClick}>
        <StyledImage src={imageSrc} alt={product.title} loading="lazy"></StyledImage>
        <CategoryBanner>{product.category}</CategoryBanner>
        <TitleText>{product.title}</TitleText>
        <DescriptionText>{product.description}</DescriptionText>
        <Button title="구매하기"></Button>
      </Wrapper>
    );
  }


export default ProductListItem;