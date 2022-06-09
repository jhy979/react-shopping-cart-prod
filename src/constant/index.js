const PATH = {
  HOME: '/',
  CART: '/cart',
  DETAIL: '/detail',
  ORDER_LIST: '/order_list',
  ORDER_PAY: '/order_pay',
  LOGIN: '/login',
  SIGN_UP: '/sign_up',
  EDIT_USER_INFO: '/user_info',
  WITHDRAWAL: '/withdrawal',
  ORDER_DETAIL: '/order_detail',
};

const ERROR_MESSAGE = {
  LOGIN: '로그인에 실패하셨습니다.',
  SIGN_UP: '중복된 아이디입니다.',
  VIEW_USER_INFO: '사용자 정보 조회에 실패하셨습니다.',
  EDIT_USER_INFO: '사용자 정보 수정에 실패하셨습니다.',
  WITHDRAWAL: '비밀번호를 잘못 입력하셨습니다.',
};

const CONFIRM_MESSAGE = {
  DELETE_CART: '장바구니에서 삭제하시겠습니까?',
  PLEASE_LOGIN: '먼저 로그인해주세요.',
  PLEASE_CHOOSE_PRODUCT: '주문하실 상품을 선택해주세요.',
};

const VALIDATION_MESSAGE = {
  ID: '4~16자의 영어 소문자, 숫자만 사용 가능합니다.',

  NICKNAME: '2~10자만 입력 가능합니다.',
  PASSWORD:
    '8~20자 영어 대문자, 소문자, 숫자, 특수문자 각각 반드시 1개 이상 포함 된 비밀번호를 사용하세요.',
  CONFIRM_PASSWORD: '비밀번호가 다릅니다.',
  ADDRESS: '255자 이하로 작성해주세요.',
  THREE_LENGTH_NUMBER: '3자리 숫자',
  FOUR_LENGTH_NUMBER: '4자리 숫자',
};

const PAGINATION_LIMIT = 12;

const API_URL = process.env.REACT_APP_API_URL;

export {PATH, ERROR_MESSAGE, CONFIRM_MESSAGE, VALIDATION_MESSAGE, PAGINATION_LIMIT, API_URL};
