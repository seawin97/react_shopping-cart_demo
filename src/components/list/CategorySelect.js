import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CategorySelect() {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리를 상태로 관리

  // 드롭다운에서 카테고리를 선택했을 때 실행되는 함수
  const handleCategoryChange = (e) => {
    const category = e.target.value; // 선택된 카테고리 값
    setSelectedCategory(category); // 상태 업데이트
    navigate(`/category/${category}`); // 선택된 카테고리 경로로 이동
  };

  return (
    <div>
      <label htmlFor="categorySelect">카테고리 선택: </label>
      <select
        id="categorySelect"
        value={selectedCategory}
        onChange={handleCategoryChange} // 카테고리 변경 시 이벤트 핸들러 실행
      >
        <option value="">전체</option>
        <option value="smartphones">스마트폰</option>
        <option value="laptops">노트북</option>
        <option value="tablets">태블릿</option>
        {/* 필요한 경우 여기에 다른 카테고리 옵션 추가 */}
      </select>
    </div>
  );
}

export default CategorySelect;
