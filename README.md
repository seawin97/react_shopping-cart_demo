React 쇼핑몰 데모 프로젝트

이 프로젝트는 React와 Styled-Components를 활용해 구현한 쇼핑몰 데모 웹입니다.  
카테고리 필터, 상품 상세 보기, 장바구니 기능 등 쇼핑몰의 기본 기능을 포함하고 있으며 `dummyjson.com` API를 기반으로 데이터를 활용합니다.

## 주요 기능

  -  **상품 리스트**
  - 카테고리 필터링 기능
  - API에서 전체 상품 로드 및 필터링
-  **상품 상세 페이지**
  - 상품 이미지, 설명, 가격 출력
  - 이전/다음 상품 이동 기능
-  **장바구니 기능**
  - 상품 담기, 수량 조절, 삭제
  - 총 결제 금액 계산
  - localStorage를 활용한 상태 유지
-  **SPA 라우팅**
  - React Router를 이용한 페이지 이동 (`/`, `/detail/:id`, `/cart`)
-  **스타일 구성**
  - styled-components 기반 컴포넌트 단위 스타일링

## 사용 기술 스택

<table>
  <thead>
    <tr>
      <th>기술</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>React</strong></td>
      <td>UI 라이브러리</td>
    </tr>
    <tr>
      <td><strong>React Router</strong></td>
      <td>SPA 라우팅 처리</td>
    </tr>
    <tr>
      <td><strong>styled-components</strong></td>
      <td>CSS-in-JS 스타일 구성</td>
    </tr>
    <tr>
      <td><strong>Axios</strong></td>
      <td>REST API 호출용 라이브러리</td>
    </tr>
    <tr>
      <td><strong>LocalStorage</strong></td>
      <td>장바구니 상태 영속성 유지</td>
    </tr>
  </tbody>
</table>


## 설치 및 실행 방법

```bash
1. 프로젝트 클론
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2. 의존성 설치
npm install

3. 개발 서버 실행
npm start
