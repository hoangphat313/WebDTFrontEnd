import React from "react";
import { FooterStyled, FooterTextStyled } from "./style";
import { InstagramFilled,FacebookFilled } from '@ant-design/icons'

const FooterComponent = () => {
    return (
       <FooterStyled>
            <FooterTextStyled span={8}>
                <h2>LIÊN HỆ</h2>
                <h4>&#x1F4CC;127/14,Hoàng Hoa Thám,P13,Quận Tân Bình,TP HCM</h4>
                <h4>&#9742;Phone: 039 570 4727</h4>
                <h4>&#9993;Email: phoangphat313@gmail.com</h4>
            </FooterTextStyled>
            <FooterTextStyled span={8}>
                <h2>CHÍNH SÁCH HỖ TRỢ</h2>
                <h4>Tìm kiếm</h4>
                <h4>Giới thiệu</h4>
                <h4>Chính sách thanh toán</h4>
                <h4>Chính sách hỗ trợ</h4>
                <h4>Chính sách đổi trả và hoàn tiền</h4>
            </FooterTextStyled>
            <FooterTextStyled span={8}>
                <h2>LIÊN KẾT VỚI CHÚNG TÔI</h2>
                <h4>Hãy kết nối với chúng tôi</h4>
                <div className="footer_icon" >                   
                    <a href="https://www.facebook.com/hphat.031"><FacebookFilled style={{fontSize:'25px',cursor:'pointer',color:'#fff',paddingRight:'8px'}}/></a>
                    <a href="https://www.instagram.com/if.hphat/"> <InstagramFilled style={{fontSize:'25px',cursor:'pointer',color:'#fff'}} /></a>
                </div>
            </FooterTextStyled>
       </FooterStyled>
    )
}
export default FooterComponent