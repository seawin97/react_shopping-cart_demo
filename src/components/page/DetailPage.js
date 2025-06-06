import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

// 전체 페이지 레이아웃
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 상품 상세 정보 영역
const DetailProductSession = styled.div`
    width: 40%;
    padding: 30px;
    border: 1px solid grey;
    border-radius: 8px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 이전/다음 상품 이동 버튼 영역
const PrevNextProductSession = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
`;

const ButtonProductSession = styled.button`
    width: 20%;
    padding: 30px;
    border: 1px solid grey;
    border-radius: 8px;
    background: white;
    text-align: center;
    cursor: pointer;
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
    text-align: center;
`;

const StyledImage = styled.img`
    width: 700px;
    height: 700px;
    display: inline-block;
`;

function DetailPage() {
    const { productId } = useParams();  // URL에서 productId 파라미터 추출
    const navigate = useNavigate(); // 페이지 이동 함수

    // 상태 변수 선언
    const [product, setProduct] = useState(null);   // 현재 상품
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [prevProduct, setPrevProduct] = useState(null);   // 이전 상품
    const [nextProduct, setNextProduct] = useState(null);   // 다음 상품

    // 상품 정보 및 이전/다음 상품 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://dummyjson.com/products/${productId}`);
                setProduct(response.data);  // 현재 상품 설정
                await fetchPrevNextProducts(productId); // 이전/다음 상품 불러오기
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productId]);

    // 이전/다음 상품 정보 요청
    const fetchPrevNextProducts = async (currentProductId) => {
        const prevId = parseInt(currentProductId, 10) - 1;
        const nextId = parseInt(currentProductId, 10) + 1;
    
        try {
            const prevResponse = await axios.get(`https://dummyjson.com/products/${prevId}`);
            setPrevProduct(prevResponse.data);
        } catch (error) {
            setPrevProduct(null); // 상품이 없으면 null
        }
    
        try {
            const nextResponse = await axios.get(`https://dummyjson.com/products/${nextId}`);
            setNextProduct(nextResponse.data);
        } catch (error) {
            setNextProduct(null); // 상품이 없으면 null
        }
    };
    

    // 장바구니에 상품 추가
    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const updatedCart = [
            ...cart,
            {
                id: product.id,
                title: product.title,
                description: product.description,
                thumbnail: product.thumbnail,
                price: product.price,
                quantity: 1
            }
        ];

        localStorage.setItem('cart', JSON.stringify(updatedCart));  // 로컬스토리지 저장
        navigate('/cart');  // 장바구니 페이지로 이동
    };

    // 이전 상품 보기
    const goToPreviousProduct = () => {
        if (prevProduct) {
            navigate(`/detail/${prevProduct.id}`);
        }
    };

    // 다음 상품 보기
    const goToNextProduct = () => {
        if (nextProduct) {
            navigate(`/detail/${nextProduct.id}`);
        }
    };

    // 로딩 및 에러 처리
    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!product) return null;

    return (
        <Wrapper>
            <DetailProductSession>
                <StyledImage src={product.thumbnail} alt={product.title} />
                <CategoryBanner>{product.category}</CategoryBanner>
                <TitleText>{product.title}</TitleText>
                <DescriptionText>{product.description}</DescriptionText>
                <TitleText>{product.price}</TitleText>
                <Button title="장바구니 담기" onClick={addToCart} />
            </DetailProductSession>

            <PrevNextProductSession>
                <ButtonProductSession onClick={goToPreviousProduct}>
                    <CategoryBanner>이전 상품</CategoryBanner>
                    <TitleText>{prevProduct ? prevProduct.title : '이전 상품 없음'}</TitleText>
                </ButtonProductSession>

                <ButtonProductSession onClick={goToNextProduct}>
                    <CategoryBanner>다음 상품</CategoryBanner>
                    <TitleText>{nextProduct ? nextProduct.title : '다음 상품 없음'}</TitleText>
                </ButtonProductSession>
            </PrevNextProductSession>
        </Wrapper>
    );
}

export default DetailPage;
