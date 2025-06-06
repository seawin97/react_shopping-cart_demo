import React from 'react';
import styled from 'styled-components';
import ProductListItem from './ProductListItem';

// 상품 목록 전체를 감싸는 스타일 컴포넌트
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    align-content: space-around;
    justify-content: space-around;
`;

function ProductList({ products, onClickItem }) {
    return (
        <Wrapper>
            {products.map(product => (
                <ProductListItem
                    key={product.id}    // 고유 ID를 key로 사용 (React 최적화)
                    product={product}   // 상품 데이터 전달
                    onClick={() => onClickItem(product)}    // 클릭 시 부모에게 상품 전달
                />
            ))}
        </Wrapper>
    );
}

export default ProductList;
