import { Badge, Button, Col, Popover } from "antd";
import React, { useEffect, useState } from "react";
import { WraperContextPupop, WrapperHeadder, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined,SearchOutlined} from '@ant-design/icons';
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import{Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingComponent/Loading";
import * as UserService from "../../services/UserServices"
import {resetUser} from '../../redux/slides/userSlide'
import { searchProduct } from "../../redux/slides/productSlide";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputComponent from "../InputComponent/InputComponent";
const HeaderComponent = ({isHiddenSearch =false,isHiddenCart=false}) => {
    
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [userName,setUsername] = useState('')
    const [userAvatar,setUserAvatar] = useState('')
    const [search,setSearch] = useState('')
    const order = useSelector((state) => state.order)
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [loading,setLoading] = useState(false)
    const handlerNavigateLogin =() => {
        navigate('sign-in')
    }

    const handleLogout = async () => {
        setLoading(true)
        await UserService.logoutUser()
        navigate('/')
        dispatch(resetUser())
        setLoading(false)
    }

    useEffect(() =>{
        setLoading(true)
        setUsername(user?.name)
        setUserAvatar(user?.avatar)
        setLoading(false)
    },[user?.name,user?.avatar])

    const content = (
        <div>
          <WraperContextPupop onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WraperContextPupop>
          {user?.isAdmin && (
    
            <WraperContextPupop onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</WraperContextPupop>
          )}
          <WraperContextPupop onClick={() => handleClickNavigate(`my-order`)}>Đơn hàng của tôi</WraperContextPupop>
          <WraperContextPupop onClick={() => handleClickNavigate()}>Đăng xuất</WraperContextPupop>
        </div>
      );
    
      const handleClickNavigate = (type) => {
        if(type === 'profile') {
          navigate('/profile-user')
        }else if(type === 'admin') {
          navigate('/system/admin')
        }else if(type === 'my-order') {
          navigate('/my-order',{ state : {
              id: user?.id,
              token : user?.access_token
            }
          })
        }else {
          handleLogout()
        }
        setIsOpenPopup(false)
    }

    const onSearch = (e) => {
        setSearch(e.target.value)
        dispatch(searchProduct(e.target.value))
    }

    return (
        <div style={{width:'100%',height:'70px',background:'#111111',display:'flex',justifyContent:'center'}}>
            <WrapperTextHeader style={{cursor:'pointer'}} onClick={() => navigate('/')}>HOANGPHATMOBILE </WrapperTextHeader> 
            <WrapperHeadder style={{justifyContent: isHiddenSearch && isHiddenCart ? 'space-between' : 'unset'}}>
                <Col span={2}>                 
                </Col>      
                {!isHiddenSearch && (
                    <Col span={14}>
                      <ButtonInputSearch
                        size = "large"
                        bordered = {false}
                        textbutton="Search"
                        placeholder="Bạn tìm gì hôm nay..."   
                        onChange={onSearch}                                                                      
                      />    
                                                         
                  </Col>
                )}           
                <Col span={8} style={{display:'flex',gap: '25px',alignItems: 'center',marginLeft:'45px'}}>
                    <Loading isLoading={loading}>
                        <WrapperHeaderAccount>
                            {userAvatar ?(
                                <img src={userAvatar} alt="avatar" style={{
                                    height:'40px',
                                    width:'40px',
                                    borderRadius:'50%',
                                    objectFit:'cover'
                                }}/>
                            ): (
                                <UserOutlined style={{fontSize: '30px'}} />
                            )}
                            {user?.access_token ? (
                                <>                               
                                    <Popover content={content} trigger="click" open={isOpenPopup}>
                                        <div style={{ cursor: 'pointer',maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                                    </Popover>
                                </>
                            ) : (
                                <div onClick={handlerNavigateLogin} style={{cursor:'pointer'}}>
                                    <WrapperTextHeaderSmall>Đăng nhập/ Đăng ký</WrapperTextHeaderSmall>
                                    <div>
                                        <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                                        <CaretDownOutlined />
                                    </div>
                                </div>
                            )}
            
                        </WrapperHeaderAccount>
                    </Loading>
                    {!isHiddenCart && (
                         <div>
                         {/* sl trong gio hang */}
                         <Badge count={order?.orderItems.length} size="small" onClick={()=> navigate('/order')}>
                             <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff',cursor:'pointer' }} />
                         </Badge>                       
                         <WrapperTextHeaderSmall onClick={()=> navigate('/order')}>Giỏ Hàng</WrapperTextHeaderSmall>
                     </div>
                    )}                                
                </Col>
            </WrapperHeadder>
        </div>
    )
}
export default HeaderComponent