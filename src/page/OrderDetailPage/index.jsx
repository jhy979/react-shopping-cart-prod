import React, {useEffect} from 'react';

import ErrorPendingBoundary from 'component/common/ErrorPendingBoundary';

import OrderItem from 'component/OrderItem';

import NotFoundPage from 'page/NotFoundPage';
import * as S from 'page/OrderDetailPage/style';

import useFetch from 'hook/useFetch';
import {useSelector} from 'react-redux';

import {useParams} from 'react-router-dom';
import {API_URL} from 'constant';
import useAuth from 'hook/useAuth';

export default function OrderDetailPage() {
  const orderList = useFetch('get');

  const {id} = useParams();

  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const isLogin = useSelector((state) => state.authReducer.isLogin);

  const {navigateLoginPage} = useAuth();

  useEffect(() => {
    if (isLogin === false) {
      navigateLoginPage();
      return;
    }

    orderList.fetch({
      API_URL: `${API_URL}/customers/orders/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }, [isLogin]);

  return (
    <S.Layout>
      <S.HeaderSpan>주문내역상세</S.HeaderSpan>
      <S.ProductTable>
        <S.ProductInfoContainer>
          <S.ProductListContainer>
            <ErrorPendingBoundary
              error={orderList.error}
              pending={orderList.pending}
              fallback={<NotFoundPage>에러가 발생했어요.</NotFoundPage>}
            >
              {orderList.data && (
                <>
                  <S.OrderTable>
                    <S.OrderTableHeader>
                      <S.OrderNumber>주문번호: {id}</S.OrderNumber>
                    </S.OrderTableHeader>
                    {orderList.data.order.map((productInfo) => (
                      <S.OrderItemContainer key={productInfo.id}>
                        <S.OrderItemBox>
                          <OrderItem productInfo={productInfo} showButton={true} />
                        </S.OrderItemBox>
                      </S.OrderItemContainer>
                    ))}
                  </S.OrderTable>
                  <S.PayBox>
                    <span>결제금액 정보</span>
                    <hr className="pay-box-hr" />
                    <S.PayAmount>
                      <S.PayBoxFont>총 결제금액</S.PayBoxFont>
                      <S.PayBoxFont>
                        {Number(orderList.data.totalCost).toLocaleString()}원
                      </S.PayBoxFont>
                    </S.PayAmount>
                  </S.PayBox>
                </>
              )}
            </ErrorPendingBoundary>
          </S.ProductListContainer>
        </S.ProductInfoContainer>
      </S.ProductTable>
    </S.Layout>
  );
}