import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../ui/Button';

// 전체 페이지를 감싸는 스타일 컴포넌트
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`;

// 장바구니 개별 상품 영역
const CartSession = styled.div`
    width: 90%;
    background: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
    border: 1px solid grey;
    border-radius: 8px;
    margin-bottom: 50px;
`;

// 결제 정보 영역
const PaySession = styled.div`
    width: 90%;
    background: white;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid grey;
    padding: 30px;
`;

// 텍스트 스타일
const TitleText = styled.p`
    font-size: 27px;
    font-weight: 600;
`;

const DescriptionText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

// 상품 이미지 스타일
const StyledImage = styled.img`
    width: 300px;
    height: 300px;
    display: inline-block;
    margin-right: 30px;
`;

function CartPage() {
    const [cartItems, setCartItems] = useState([]); // 장바구니 항목 상태
    const navigate = useNavigate(); // 페이지 이동 함수

    // 컴포넌트 마운트 시 로컬스토리지에서 장바구니 불러오기
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cartData);
    }, []);

    // 총 가격 계산 (수량 × 가격)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

     // 결제 처리 로직 (단순 알림 + 장바구니 초기화)
    const handlePayment = () => {
        alert('결제가 완료되었습니다!');
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    // 메인 페이지로 이동
    const handleGoToMain = () => {
        navigate('/');
    };

    // 수량 증가
    const handleIncrease = (index) => {
        const updatedItems = [...cartItems];
        updatedItems[index].quantity += 1;
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    // 수량 감소
    const handleDecrease = (index) => {
        const updatedItems = [...cartItems];
            if (updatedItems[index].quantity > 1) {
                updatedItems[index].quantity -= 1;
                setCartItems(updatedItems);
                localStorage.setItem('cart', JSON.stringify(updatedItems));
                }
    };

    // 장바구니 상품 제거
    const handleRemoveItem = (index) => {
        const updatedItems = [...cartItems];
        updatedItems.splice(index, 1); // 해당 인덱스의 상품을 제거
        setCartItems(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
};


    return (
        <Wrapper>
            {/* 장바구니 항목 리스트 */}
            {cartItems.map((item, index) => (
                <CartSession key={index}>
                <StyledImage src={item.thumbnail} alt={item.title} />
                <div>
                  <TitleText>{item.title}</TitleText>
                  <DescriptionText>{item.description}</DescriptionText>
                  <DescriptionText>
                    수량: 
                    <button onClick={() => handleDecrease(index)}>-</button>
                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                    <button onClick={() => handleIncrease(index)}>+</button>
                  </DescriptionText>
                  <DescriptionText>가격: {item.price}</DescriptionText>
                  <Button title="상품 삭제" onClick={(e) => {e.stopPropagation(); handleRemoveItem(index)}}/>
                </div>
              </CartSession>
            ))}
            {/* 결제 영역 */}
            <PaySession>
                <DescriptionText>총 상품 가격: {totalPrice}</DescriptionText>
                <DescriptionText>배송비: 무료</DescriptionText>
                <TitleText>총 결제 금액: {totalPrice}</TitleText>
                <Button title="결제 하기" onClick={handlePayment}></Button>
                <Button title="다른 상품 보러가기" onClick={handleGoToMain}></Button>
            </PaySession>
        </Wrapper>
    );
}

export default CartPage;
