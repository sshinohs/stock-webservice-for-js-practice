주식 정보 검색 웹서비스
==
1) Vanilla JS를 이용한 웹개발 연습
2) 주식 정보 파악


<고려사항>

- Vanilla JS로 작성
- 컴포넌트 간 의존성을 느슨하게
- 화면의 UI 요소는 컴포넌트 형태로 추상화
- 예외 처리를 하고, 예외 발생 시 사용자에게 알림
- ES6 모듈 형태로 작성
- ES6 최대한 반영
- API 호출은 fetch 함수 사용
- async, await 사용
- 객체의 이름을 알아보기 쉽게 정하기
- 코드의 중복을 최소한으로
- 전역 오염을 최소화
- 이벤트 바인딩 최적화
- localStorage 사용
- 마크업을 시멘틱한 방법으로 적용
- 다크 모드 지원
- HTTP Status code 적용
- SPA 구현

* Vanilla JS 예외 (학습 scope가 아님)
- 차트 그리기 기능
- http-server 모듈

<기능>

- 검색 기능
- 관련 검색어 리스트
- 기존 검색어 리스트
- 검색어 리스트 키보드, 마우스 선택 기능
- 검색창 포커스
- 캐시 구현
- 사용자 인증 기능: 자체 제작 및 OAuth
- 반응형 화면으로 작성
- 주식 검색어 api
- 주식 가격 api
- 보유 주식 정보 api
- 시가총액 상위 10개 도표
- 주식 종목 즐겨찾기 기능 구현
- 즐겨찾기의 폴더 CRUD, 종목 CRUD 구현
- 즐겨찾기 탐색 시, Breadcrumb 생성
- 즐겨찾기 테이블 정렬 기능
- Breadcrumb 클릭 구현
- Loading 화면 구현
- 차트 옵션 구현: x-tick(일봉, 주봉, 년봉, 분봉), (일반주가, 수정주가)
- 차트 비교 기능 구현
