# 1단계 기능 구현 목록

## 상품 목록 페이지

- 상품 목록을 보여준다
- `장바구니 버튼`을 클릭하면 해당 상품이 장바구니에 들어간다
- 상품 이미지 또는 상품명을 클릭하면 해당 상품 상세 페이지로 이동한다

## 상품 상세 페이지

- 선택된 상품의 상세 정보를 보여준다
- `장바구니 버튼`을 클릭하면 해당 상품이 장바구니에 들어간다

## 장바구니 페이지

- 장바구니에 담긴 상품 목록을 보여준다
- 상품을 삭제할 수 있다

  - 삭제 아이콘을 클릭하면 해당 상품을 삭제할 수 있다

- 상품의 이미지 또는 상품명을 클릭하면 해당 상품 상세 페이지로 이동한다

# 2단계 기능 구현 목록

## 장바구니 페이지

- 상품들을 체크박스로 선택하고 해제할 수 있다

- 상품의 이미지를 클릭하면 상품 상세 페이지로 이동할 수 있다

- 상품의 수량을 수정할 수 있다

- 상품삭제 버튼을 통해 선택된 제품들을 장바구니에서 삭제할 수 있다

# 협업 1단계 기능 구현 목록

- MSW를 활용한 API mocking
  - 회원가입
  - 로그인
  - 회원 정보 수정
  - 회원 정보 가져오기
  - 회원 탈퇴

- Token기반의 로그인
  - localStorage에 토큰을 저장한다. 

- 회원 가입
  - account
    - 중복 체크 API
    - 글자: 영어(소문자), 숫자, 글자수(4 ~ 15)
  - nickname
    - 중복 가능
    - 글자: 글자수 (2 ~ 10)
  - password
    - 영어 대문자, 소문자, 숫자 중 2종류 이상을 조합
    - 글자수: 8 ~ 20
  - address
    - 255자
  - phoneNumber 
    - 3글자, 4글자, 4글자 숫자여야한다  

- 회원 정보 수정
  - nickname
    - 중복 가능
    - 글자: 글자수 (2 ~ 10)
  - address
    - 255자
  - phoneNumber 
    - 3글자, 4글자, 4글자 숫자여야한다  

- 회원 탈퇴
  - 비밀번호 입력을 받는다. 