import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 상단 헤더 스타일 정의
const StyledHeader = styled.div`
    background: black;
    color: #fff;
    height: 100px;
    margin-bottom: 50px;
    font-size: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

// 메뉴 항목 텍스트 스타일
const MenuText = styled.span`
    color: #fff;
    font-weight: 600;
    display: inline-block;
    cursor: pointer;
`;

// 상단 헤더 컴포넌트
function Header() {
    const navigate = useNavigate(); // 페이지 이동 함수

    return (
        <StyledHeader>
            {/* 메인 페이지로 이동 */}
            <MenuText onClick={() => navigate("/")}>HOME</MenuText>
            {/* 장바구니 페이지로 이동 */}
            <MenuText onClick={() => navigate("/cart")}>CART</MenuText>
        </StyledHeader>
    );
}

export default Header;
