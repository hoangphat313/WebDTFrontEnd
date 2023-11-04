import React from 'react'
import { Lable, WrapperInfo, WrapperContainer, WrapperValue, WrapperCountOrder, WrapperItemOrder, WrapperItemOrderInfo } from './style';
import Loading from '../../components/LoadingComponent/Loading';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { orderContant } from '../../contant';
import { convertPrice } from '../../utils';


const OrderSucess = () => {
  const location = useLocation()
  const {state} = location

  return (
    <div style={{background: '#fff', with: '100%', height: '100vh'}}>
      <Loading isLoading={false}>
        <div style={{height: '100%', width: '1270px', margin: '0 auto'}}>
          <h2 style={{paddingTop:'10px'}}>Đơn hàng đặt thành công</h2>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <WrapperContainer>

              <WrapperInfo>
                <div>
                  <Lable style={{fontSize:'16px'}}>Phương thức giao hàng</Lable>
                    <WrapperValue>
                      <span style={{color: '#ea8500', fontWeight: 'bold'}}>{orderContant.delivery[state?.delivery]}</span> Giao hàng tiết kiệm
                    </WrapperValue>
                </div>
              </WrapperInfo>

              <WrapperInfo>
                <div>
                  <Lable style={{fontSize:'16px'}}>Phương thức thanh toán</Lable>
                  <WrapperValue>
                    {orderContant.payment[state?.payment]}
                  </WrapperValue>
                </div>
              </WrapperInfo>

              <WrapperItemOrderInfo>
                {state.orders?.map((order) => {
                  return (
                    <WrapperItemOrder key={order?.name}>

                      <div style={{width: '500px', display: 'flex', alignItems: 'center', gap: 4}}> 
                        <img src={order.image} style={{width: '77px', height: '79px', objectFit: 'cover'}}/>
                        <div style={{
                          width: 260,
                          overflow: 'hidden',
                          fontSize:'14px',
                          textOverflow:'ellipsis',
                          whiteSpace:'nowrap',
                          paddingLeft:'20px',
                          width:'100%'
                        }}>{order?.name}</div>
                      </div>
                      
                      <div style={{flex: 1, display: 'flex', alignItems: 'center',gap: '10px'}}>
                      <span>
                          <span style={{ fontSize: '14px', color: '#242424',paddingRight:'50px' }}>Số lượng: {order?.amount}</span>
                        </span>
                        <span>
                          <span style={{ fontSize: '14px', color: '#242424' }}>Giá tiền: {convertPrice(order?.price)}</span>
                        </span>
                        
                      </div>
                    </WrapperItemOrder>
                  )
                })}
              </WrapperItemOrderInfo>

              <div style={{height:'40px',width:'fit-content',marginTop:'20px',marginLeft:'950px'}}>
                <span style={{ fontSize: '20px', color: 'red',fontWeight:'700' }}>Tổng tiền: {convertPrice(state?.totalPriceMemo)}</span>
              </div>
            </WrapperContainer>
          </div>
        </div>
      </Loading>
    </div>
  )
}

export default OrderSucess
