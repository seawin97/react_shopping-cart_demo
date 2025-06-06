import React from 'react';
import styled from 'styled-components';

// 공통 버튼 스타일 정의
const StyledButton = styled.button`
    padding: 20px 16px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: black;
    color: #fff;
    width: 100%;
    margin-bottom: 30px;
`;

// 재사용 가능한 버튼 컴포넌트
function Button({ title = '주문하기', onClick }) {
    return (
        <StyledButton onClick={onClick}>
            {title}
        </StyledButton>
    );
}

export default Button;
