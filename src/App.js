import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import DetailPage from './components/page/DetailPage';
import CartPage from './components/page/CartPage';

function App() {
  return (
    <div className="App">
      {/* 라우팅 설정: 페이지 간 이동을 위한 Router */}
      <BrowserRouter>
        <Routes>
          {/* 메인 페이지 (전체 상품 목록) */}
          <Route path="/" element={<MainPage />} />
          {/* 상품 상세 페이지 (productId에 따라 동적 경로 처리) */}
          <Route path="detail/:productId" element={<DetailPage />} />
          {/* 장바구니 페이지 */}
          <Route path="cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;