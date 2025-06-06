import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Header from '../ui/Header';
import ProductList from '../list/ProductList';

// 페이지 전체를 감싸는 컨테이너
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 카테고리 선택 박스 스타일
const SelectBox = styled.select`
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 20px;
`;

function MainPage() {
    const [products, setProducts] = useState([]);   // 전체 상품 목록
    const [categories, setCategories] = useState([]);   // 카테고리 목록
    const [selectedCategory, setSelectedCategory] = useState('');   // 선택된 카테고리
    const [loading, setLoading] = useState(false);  // 로딩 상태
    const [error, setError] = useState(null);   // 에러 상태

    const navigate = useNavigate(); // 상세 페이지로 이동하는 함수

    // 페이지 로드 시 상품 및 카테고리 목록 불러오기
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // 모든 상품 가져오기
                const response = await axios.get('https://dummyjson.com/products?limit=0');
                setProducts(response.data.products);

                // 카테고리 목록 가져오기
                const categoryResponse = await axios.get('https://dummyjson.com/products/category-list');
                setCategories(categoryResponse.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 카테고리 선택 변경 시 실행
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    // 선택된 카테고리에 따라 상품 필터링
    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    // 로딩 및 에러 상태 처리
    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!products || products.length === 0) return <div>상품이 없습니다.</div>;

    return (
        <Wrapper>
            <Header />
            {/* 카테고리 선택 드롭다운 */}
            <SelectBox value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">전체 카테고리</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </SelectBox>
            {/* 상품 리스트 */}
            <ProductList
                products={filteredProducts}
                onClickItem={(item) => navigate(`/detail/${item.id}`)}
            />
        </Wrapper>
    );
}

export default MainPage;
